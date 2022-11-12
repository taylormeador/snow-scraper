import psycopg2
from config import POSTGRES_PASSWORD, POSTGRES_HOST


class DB:
    def __init__(self):
        self.conn = psycopg2.connect(
                    database="snow",
                    user="postgres",
                    password=POSTGRES_PASSWORD,
                    host=POSTGRES_HOST,
                    port='5432'
                )
        self.cur = self.conn.cursor()

    def get_resorts_key(self, resort_name, resort_state):
        self.cur.execute('SELECT resorts_key FROM resorts_dim WHERE resort_name = %s AND resort_state = %s', (resort_name, resort_state))
        result = self.cur.fetchone()
        if result:
            return result[0]
        return None

    def snow_fall_entry_exists(date, resorts_key):
        pass