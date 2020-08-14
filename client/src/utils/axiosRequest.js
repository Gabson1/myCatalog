import axios from 'axios';

export const axiosPost = (url, data) => {
  axios({
    headers: { 'Content-Type': 'application/json' },
    method: 'post',
    url: url,
    data: { data },
  });
}