from skyfield.api import load, Topos
from string import Template
from pytz import timezone
from datetime import datetime
planets = load('de421.bsp')
timescale = load.timescale()

def get_astrometric(celestial_obj, observer_pos, observer_time):
    return observer_pos.at(observer_time).observe(celestial_obj).apparent()

def get_lodz_time():
    central = timezone('Europe/Warsaw')
    d = datetime(2014, 1, 16, 1, 32, 9)
    c = central.localize(d)
    t = timescale.utc(c)
    # UTC datetime
    dt = t.utc_datetime()
    print('UTC: ' + str(dt))
    # Converting back to an Eastern Time datetime.
    dt = t.astimezone(central)
    print('EST: ' + str(dt))
    return t

def get_position(location):
    earth = planets['earth']
    return earth + Topos(location.longitude, location.latitude)

def print_ephemerides(obj, location, time):
    object = planets[obj]
    obj_name = obj.capitalize()
    loc_name = location.name
    loc_coords = get_position(location)
    astrometric = get_astrometric(object, loc_coords, time)
    alt, az, distance = astrometric.altaz()
    tm = time.utc_datetime()
    template = Template('Pozycja ${obj_name} dla ${loc_name} o czasie $tm: * Azymut: ${az} | * Wysoko ść: ${alt}').substitute(obj_name=obj_name, loc_name=loc_name, tm=tm, az=az, alt=alt)
    print(template)

class Location:
    def __init__(self, name, longitude, latitude):
        self.name = name
        self.longitude = longitude
        self.latitude = latitude

planet = 'venus'
ldz = Location('Łódź', '51.0 N', '19.0 W')
# alx = Location('Aleksandrów Łódzki', +51.8146634, +19.2659747)
# lodz_location = get_lodz_position()
lodz_time = get_lodz_time()
# print_ephemerides(planet, lodz_location, lodz_time)
# print_ephemerides(planet, alx, lodz_time)
print_ephemerides(planet, ldz, lodz_time)

observables = ['sun', 'moon', 'mercury', 'venus', 'mars', 'jupiter', 'saturn']

