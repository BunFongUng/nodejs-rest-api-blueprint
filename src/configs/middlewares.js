import morgan from 'morgan';
import bodyParser from 'body-parser';

export default app => {
    app.use(morgan('dev'));

    app.use(bodyParser.json());

    app.use(bodyParser.urlencoded({
        extended: false
    }));
}