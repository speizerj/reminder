from firebase import firebase
from os.path import join, dirname
from dotenv import load_dotenv

dotenv_path = join(dirname(__file__), '.env')
load_dotenv(dotenv_path)

FIREBASE_REF = os.environ.get("FIREBASE_REF")
FIREBASE_SECRET = os.environ.get("FIREBASE_SECRET")

firebase = firebase.FirebaseApplication(FIREBASE_REF, None)
