import { Query} from './index';

const all = async () => Query("SELECT * FROM users");
const one = async (id: string) => Query("SELECT * FROM users WHERE users.id = ?", [id]);
// const findUserByName = async (name: string) => Query("")
const post = async (name: string, email: string, password: string) => Query("INSERT INTO users (name, email, password) values (?,?,?)", [name, email, password]);
const destroy = async (id: string) => Query("DELETE FROM users WHERE id = ?", [id]);

export default {
    all,
    one,
    post,
    destroy
}