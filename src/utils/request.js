import config from '../config/config';
import { GET_TRANSACTIONS, GET_WALLET, SETUP_API, TRANSACTION } from '../config/constants';

const { walletBaseUri: BASE_URI } = config;

const post = async (url, body) => {
  try {
    const res = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(err);
  }
}

const get = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(err);
  }
}

export const setupWallet = (body) => {
  const url = `${BASE_URI}${SETUP_API}`;
  return post(url, body);
}

export const startTransactions = (walletId, body) => {
  const url = `${BASE_URI}${TRANSACTION}/${walletId}`;
  return post(url, body);
}

export const getWallet = (walletId) => {
  const url = `${BASE_URI}${GET_WALLET}/${walletId}`;
  return get(url);
}

export const getTransactions = (walletId, { limit, skip, sortByDate, sortByAmount } = {}) => {
  let url = `${BASE_URI}${GET_TRANSACTIONS}?walletId=${walletId}`;
  url = limit ? `${url}&limit=${limit}` : url;
  url = skip ? `${url}&skip=${skip}` : url;
  url = sortByDate ? `${url}&sortByDate=${sortByDate}` : url;
  url = sortByAmount ? `${url}&sortByAmount=${sortByAmount}` : url;
  return get(url);
}
