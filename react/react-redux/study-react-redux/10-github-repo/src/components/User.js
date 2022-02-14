import React from 'react';
import PropTypes from 'prop-types';

export default class User extends React.Component {
  UNSAFE_componentWillMount() {
    this.props.onMount(this.props.user);
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.user !== nextProps.user) {
      // props.user에 변화가 있을 때 페이지 이동 발생시킴
      this.props.onUpdate(nextProps.user);
    }
  }

  render() {
    const { category, repos, error } = this.props;

    return (
      <div>
        {/* 타이틀 출력(2번 기능) */}
        <h2>{typeof category !== 'undefined' ? `${category.name}의 리포지토리` : ''}</h2>
        {(() => {
          if (error) {
            // 오류 출력
            return <p>오류가 발생했습니다. 새로고침 해주세요.</p>;
          } else if (typeof repos === 'undefined') {
            // 요청 진행중
            return <p>데이터를 읽어 들이는 중...</p>;
          } else {
            // 리포지토리 출력(3번 기능)
            return (
              <ol>
                {repos.map((item, index) => (
                  <li key={index}>
                    <h3><a href={item.url} target="_blank">{item.name}</a></h3>
                    <p>{item.description}</p>
                  </li>
                ))}
              </ol>
            );
          }
        })()}
      </div>
    );
  }
}

User.propTypes = {
  user: PropTypes.string,
  onMount: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  // category, repos, error의 자료형 추가
  category: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ),
  error: PropTypes.bool.isRequired
};

User.defaultProps = {
  // 기본값으로 애플의 링크를 출력
  user: 'apple',
};
