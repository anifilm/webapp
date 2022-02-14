import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
        <h2>
          {typeof category !== 'undefined'
            ? `${category.name}의 리포지토리`
            : ''}
        </h2>
        {(() => {
          if (error) {
            // 오류 출력
            return <p>오류가 발생했습니다. 새로고침 해주세요.</p>;
          } else if (typeof repos === 'undefined') {
            // 요청 진행중
            return <p>데이터를 읽어 들이는 중...</p>;
          } else {
            // 리포지토리 출력(3번 기능)
            return repos.map((item, index) => (
              <Card
                key={index}
                style={{
                  width: 360,
                  height: 180,
                  marginRight: 10,
                  marginBottom: 10,
                  float: 'left',
                }}
              >
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.name}
                    </Typography>
                    <Typography component="p">{item.description}</Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary" href={item.url}>
                    리포지토리로 이동하기
                  </Button>
                </CardActions>
              </Card>
            ));
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
      url: PropTypes.string.isRequired,
    }),
  ),
  error: PropTypes.bool.isRequired,
};

User.defaultProps = {
  // 기본값으로 애플의 링크를 출력
  user: 'apple',
};
