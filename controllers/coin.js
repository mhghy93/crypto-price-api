const CoinGecko = require('coingecko-api');

const CoinGeckoClient = new CoinGecko();

exports.getAllCoinPrices = async (req, res) => {
  try {
    let data = await CoinGeckoClient.coins.all();
    return res.json(data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
