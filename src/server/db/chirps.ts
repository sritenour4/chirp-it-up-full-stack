import { Query} from './index';

// const all = async () => Query('SELECT * FROM chirpr.chirps');
const all = () => Query('SELECT * FROM chirps');
const one = (userid: string) => Query("SELECT * FROM chirps WHERE chirps.id = ?" [userid]);
const post = (userid: string, content: string, location: string) => Query('INSERT INTO chirps (userid, content, location) values (?,?,?)', [userid, content, location]);
const put = (userid: string, content: string) => Query("UPDATE chirps SET content = ? WHERE userid = ?", [userid, content]);
const destroy = (userid: string) => Query("DELETE FROM chirps WHERE userid = ?", [userid]);

export default {
    all,
    one,
    post,
    put,
    destroy
};