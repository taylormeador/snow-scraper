from db import DB

db = DB()

def test_get_resorts_key():
    assert db.get_resorts_key('Beaver Creek', 'CO') == 34
    assert db.get_resorts_key('Crested Butte', 'CO') == 40
    assert db.get_resorts_key('Sunlight', 'CO') == 56
