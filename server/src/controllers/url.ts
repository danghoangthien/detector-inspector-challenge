import axios from 'axios';

export const parse = async (req, res, next) => {
  if (!req.body.url) {
    return res.send(false);
  }
  try {
    const { data: html } = await axios.get(req.body.url);
    return res.send({
      html
    });
  } catch (error) {
    next(error);
  }
  
};
