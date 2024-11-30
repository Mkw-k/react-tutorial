const path = require('path');

//웹팩은 이거로 다 돌아간다
module.exports = {
    name: 'word-relay-setting',
    mode: 'development', //실서비스 : production
    devtool: 'eval', //개발시에는 eval, 운영시에는 hidden-source-map
    resolve: {
        extensions: ['.js', '.jsx']
    }, //이걸 통해서 이름에 해당하는 확장자가 있는지 리졸버가 알아서 찾는다, 밑에꺼랑 연동이라 보면됨 client.js, client.jsx를 찾게됨

    entry: {
        app: ['./client'], //client.jsx 가 wordRelay.jsx를 불러오고 있기 때문에 client.jsx만 넣음
    }, //입력 - 이게 중요함

    module: {
        rules: [{
            test: /\.jsx?/, //js and jsx 파일에 바벨을 적용해서 최신 문법을 옛날 브라우저에서도 돌아가는 문법으로 변환
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react'], //바벨 적용
                plugins: ['@babel/plugin-proposal-class-properties'], //나의 경우엔 이게 없어도 되는거 같음, 플러그인[state쓰려면]
            }
        }],
    },

    output: {
        path: path.join(__dirname, 'dist'), //조금 복잡하게 하기 위해 dist라는 폴더 만듬, path를 쓰면 자동으로 폴더를 만들어줌, __dirname은 현재 폴더
        filename: 'app.js'
    }, //출력 - 이게 중요함
};