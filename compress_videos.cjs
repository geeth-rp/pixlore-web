const fs = require('fs');
const path = require('path');
const ffmpeg = require('fluent-ffmpeg');
const ffmpegInstaller = require('@ffmpeg-installer/ffmpeg');

ffmpeg.setFfmpegPath(ffmpegInstaller.path);

const directoryPath = path.join(__dirname, 'src', 'assets');

const files = fs.readdirSync(directoryPath);

files.forEach((file) => {
  if (file.endsWith('.mp4')) {
    const filePath = path.join(directoryPath, file);
    const tempPath = path.join(directoryPath, 'temp_' + file);
    
    console.log(`Starting compression for ${file}...`);
    
    ffmpeg(filePath)
      .outputOptions([
        '-c:v libx264',    // Video codec
        '-crf 28',         // Constant Rate Factor (higher = more compression, lower quality)
        '-preset fast',    // Encoding speed vs compression ratio
        '-c:a aac',        // Audio codec
        '-b:a 128k',       // Audio bitrate
        '-movflags +faststart' // Web streaming optimization
      ])
      // Resize to 720p max, keeping aspect ratio
      .size('?x720')
      .on('end', () => {
        console.log(`Finished processing ${file}. Overwriting original...`);
        fs.renameSync(tempPath, filePath);
      })
      .on('error', (err) => {
        console.error(`Error processing ${file}:`, err);
      })
      .save(tempPath);
  }
});
