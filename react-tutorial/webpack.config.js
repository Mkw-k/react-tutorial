const path = require('path');

//웹팩은 이거로 다 돌아간다
module.exports = {
    name: 'word-relay-setting',
    mode: 'development', //실서비스 : production
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx']
    }, //이걸 통해서 이름에 해당하는 확장자가 있는지 리졸버가 알아서 찾는다, 밑에꺼랑 연동이라 보면됨 client.js, client.jsx를 찾게됨

    entry: {
        app: ['./client'], //client.jsx 가 wordRelay.jsx를 불러오고 있기 때문에 client.jsx만 넣음
    }, //입력 - 이게 중요함

    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: ['@babel/plugin-proposal-class-properties'], //나의 경우엔 이게 없어도 되는거 같음
            }
        }],
    },

    output: {
        path: path.join(__dirname, 'dist'), //조금 복잡하게 하기 위해 dist라는 폴더 만듬, path를 쓰면 자동으로 폴더를 만들어줌, __dirname은 현재 폴더
        filename: 'app.js'
    }, //출력 - 이게 중요함
};