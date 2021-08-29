const production = process.env.NODE_ENV === 'production';

function babelOptions() {
  return {
    plugins: production ? ['transform-remove-console'] : []
  };
}

module.exports = {
  mount: {
    public: '/',
    src: '/dist'
  },
  plugins: [

  ],
  alias: {
    '~': './src'
  }
};
