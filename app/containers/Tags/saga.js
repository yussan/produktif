import steem from 'steem';

import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_TRENDING_TAGS_START } from './constants';
import { getTrendingTagsError, getTrendingTagsSuccess } from './actions';

// import { makeSelectaHeader } from 'containers/Header/selectors';

function apiTrending() {
  return new Promise((resolve, reject) => {
    steem.api.getTrendingTags('indonesia', 20, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
}

export function* getTrendingTags() {
  try {
    const trendingTags = yield call(apiTrending);
    yield put(getTrendingTagsSuccess(trendingTags));
  } catch (err) {
    yield put(getTrendingTagsError(err));
  }
}

export default function* trendingTagsData() {
  yield takeLatest(GET_TRENDING_TAGS_START, getTrendingTags);
}
