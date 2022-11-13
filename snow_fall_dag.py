
from datetime import timedelta, datetime
from airflow import DAG
from airflow.operators.bash import BashOperator

# These args will get passed on to each operator
default_args = {
    'owner': 'airflow',
    'depends_on_past': False,
    'email': ['taylor.r.meador@gmail.com'],
    'email_on_failure': True,
    'email_on_retry': True,
    'retries': 1,
    'retry_delay': timedelta(minutes=5),
}

# create DAG
with DAG(
    dag_id='snow_fall',
    default_args=default_args,
    description='Runs a script that scrapes snowfall info from snocountry.com. To be expanded',
    schedule_interval='0 0 17 * *',
    start_date=datetime(2022, 11, 11),
    catchup=False,
    tags=['example'],
) as dag:

    # t1 runs snocountry_scraper
    t1 = BashOperator(
        task_id='snocountry_scraper',
        bash_command='python ../snocountry_scraper.py',
    )
