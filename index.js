const ChannelDownloader = require("./scripts/download-channel");
const channelDownloader = new ChannelDownloader();

const channelId = "-1001529361022";
const downloadableFiles = {
  webpage: true,
  poll: true,
  geo: true,
  contact: true,
  venue: true,
  sticker: true,
  image: true,
  video: false,
  audio: true,
  pdf: true,
};

(async () => {
  try {
    await channelDownloader.handle({ channelId, downloadableFiles });
  } catch (err) {
    console.error(err);
  }
})();
