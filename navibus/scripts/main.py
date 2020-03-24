from skyfield.api import load, Topos
from string import Template
from pytz import timezone
from datetime import datetime
planets = load('de421.bsp')
timescale = load.timescale()

def get_astrometric(celestial_obj, observer_pos, observer_time):
    return observer_pos.at(observer_time).observe(celestial_obj).apparent()

def get_time():
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


def get_lodz_position():
    earth = planets['earth']
    return earth + Topos('51.0 N', '19.0 W')

def print_ephemerides_for_lodz(obj, time):
    object = planets[obj]
    obj_name = obj.capitalize()
    lodz = get_lodz_position()
    astrometric = get_astrometric(object, lodz, time)
    alt, az, distance = astrometric.altaz()
    tm = time.utc_datetime()
    template = Template('Pozycja ${obj_name} dla Łodzi o czasie $tm: * Azymut: ${az} | * Wysokość: ${alt}').substitute(obj_name=obj_name, tm=tm, az=az, alt=alt)
    print(template)

local_time = get_time()
print_ephemerides_for_lodz('venus', local_time)
