import psycopg2
from config import POSTGRES_PASSWORD, POSTGRES_HOST

# connect to db
conn = psycopg2.connect(
    database="snow",
    user="postgres",
    password=POSTGRES_PASSWORD,
    host=POSTGRES_HOST,
    port='5432'
)

# Open a cursor to perform database operations
cur = conn.cursor()

resorts = [
'Arapahoe Basin',
'Aspen Highlands',
'Aspen Mountain',
'Beaver Creek',
'Bluebird Backcountry',
'Breckenridge',
'Buttermilk',
'Cooper',
'Copper Mountain',
'Crested Butte',
'Echo Mountain',
'Eldora',
'Granby Ranch',
'Hesperus Ski Area',
'Howelsen Hill',
'Irwin',
'Kendall Mountain',
'Keystone',
'Loveland',
'Monarch',
'Powderhorn',
'Purgatory',
'Silverton Mountain',
'Snowmass',
'Steamboat',
'Sunlight',
'Telluride',
'Vail',
'Winter Park',
'Wolf Creek',
]


# for resort in resorts:
#     cur.execute("INSERT INTO resorts_dim (resort_name, resort_state) VALUES (%s, %s);", (resort, 'CO'))
# conn.commit()
cur.execute("SELECT * FROM resorts_dim;")
results = cur.fetchall()
for result in results:
    print(result)

