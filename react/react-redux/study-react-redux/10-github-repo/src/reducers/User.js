// 응답에서 필요한 정보 추출
const getUser = (response) => {
  const repos = [];
  const itemLength = response.data.length;
  for (let index = 0; index < itemLength; index++) {
    const item = response.data[index];
    repos.push({
      name: item.name,
      description: item.description,
      url: item.html_url
    })
  }
  return repos;
};

// 초기 상태
const initialState = {
  // user를 category로 변경
  category: undefined,
  repos: undefined,
  error: false,
};

export default (state=initialState, action) => {
  switch (action.type) {
    case 'START_REQUEST': // 요청을 시작할 때 상태 리셋
      return {
        // category를 상태에 저장
        category: action.payload.category,
        repost: undefined,
        error: false,
      };
    case 'RECEIVE_DATA': // 응답을 받았을 때
      return action.payload.error
        ? {
            ...state,
            error: true,
          }
        : {
            ...state,
            repos: getUser(action.payload.response),
          };
    default:
      return state;
  }
};
