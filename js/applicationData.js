/* A. General data about locations:
 * In a public transportation system, there are Stations connected through Routes
 * - An Station has name, address and coordinates
 * - A Route has directions (Ej: north-south, south-north), operation days,
 *   type of hourly schedules (Intervals or Frequencies), and connected stations.
 * In other scenaries, there are just Places without relationships.
 */

var applicationData = {
categories: [
{
  name: "Ruta Principal",
  stations: [
    { /* 0 */ name: "Naranjal", address: "Av. Túpac Amaru cdra 45 con Av. Chinchaysuyo cdra 1 - Independencia", coordinatelat: "-11.982013", coordinatelng: "-77.058663", },
    { /* 1 */ name: "Izaguirre", address: "Av. Túpac Amaru cdra 37 con Av. C Izaguirre cdra 1 - Independencia", coordinatelat: "-11.988667", coordinatelng: "-77.056915", },
    { /* 2 */ name: "Pacífico", address: "Av. Túpac Amaru cdra 35 con Av. Pacífico cdra 1 - Independencia", coordinatelat: "-11.994166", coordinatelng: "-77.056207", },
    { /* 3 */ name: "Independencia", address: "Av. Túpac Amaru cdra 33 con Av. Los Pinos cdra 1 - Independencia", coordinatelat: "-11.997383", coordinatelng: "-77.055225", },
    { /* 4 */ name: "Jazmines", address: "Av. Túpac Amaru cdra 72 con Av. Los Jazmines cdra 1 - Independencia", coordinatelat: "-12.002236", coordinatelng: "-77.054719", },
    { /* 5 */ name: "Tomás Valle", address: "Av. Túpac Amaru con Av. Tomás Valle cdra 1 - Independencia", coordinatelat: "-12.007316", coordinatelng: "-77.053793", },
    { /* 6 */ name: "El Milagro", address: "Av. Túpac Amaru cdra 14 con Av. Bartolomé cdra 1 - San Martín de Porres/Independencia", coordinatelat: "-12.010883", coordinatelng: "-77.053041", },
    { /* 7 */ name: "Honorio Delgado", address: "Av. Túpac Amaru cdra 8 con Av. - Honorio Delgado cdra 1 - San Martín de Porres/Independencia", coordinatelat: "-12.018145", coordinatelng: "-77.051475", },
    { /* 8 */ name: "UNI", address: "Av. Túpac Amaru cdra 2 - San Martín de Porres/Rímac", coordinatelat: "-12.023329", coordinatelng: "-77.049930", },
    { /* 9 */ name: "Parque del Trabajo", address: "Av. Caquetá cdra 7 con Antón Sánchez cdra 1 - San Martín de Porres/Rímac", coordinatelat: "-12.030884", coordinatelng: "-77.044158", },
    { /* 10 */ name: "Caquetá", address: "Av. Caquetá cdra 1 con Av. Zarumilla cdra 1 - San Martín de Porres/Rímac", coordinatelat: "-12.036467", coordinatelng: "-77.043621", },
    { /* 11 */ name: "Ramon Castilla", address: "Av. Emancipación cdra 9 con Jr. Tayacaja cdra 6, Cercado de Lima", coordinatelat: "-12.043373", coordinatelng: "-77.042721", },
    { /* 12 */ name: "2 de Mayo", address: "Av. Alfonso Ugarte cdra 4 y 5 con Plaza Dos de Mayo, Cercado de Lima", coordinatelat: "-12.046330", coordinatelng: "-77.042785", },
    { /* 13 */ name: "Quilca", address: "Av. Alfonso Ugarte cdra 9 con Jr. Pomabamba, Breña/Cercado de Lima", coordinatelat: "-12.050862", coordinatelng: "-77.042377", },
    { /* 14 */ name: "España", address: "Av. Alfonso Ugarte cdra 13 con Av. República de Portugal, Breña/Cercado de Lima", coordinatelat: "-12.058138", coordinatelng: "-77.041765", },
    { /* 15 */ name: "Tacna", address: "Av. Emancipación cdra 4 y 5 con Av. Tacna cdra 5, Cercado de Lima", coordinatelat: "-12.04633", coordinatelng: "-77.037445", },
    { /* 16 */ name: "Jirón de la Unión", address: "Av. Emancipación cdra 1 Jr. de la Unión cdra 6, Cercado de Lima", coordinatelat: "-12.049050", coordinatelng: "-77.033110", },
    { /* 17 */ name: "Colmena", address: "Av. Nicolás de Piérola (Colmena) cdra 11 con Jr. Lampa cdra 9, Cercado de Lima", coordinatelat: "-12.052725", coordinatelng: "-77.033097", },
    { /* 18 */ name: "Central", address: "Parque Los Héroes Navales con Av. Paseo de la República 170, Cercado de Lima", coordinatelat: "-12.057756", coordinatelng: "-77.035983", },
    { /* 19 */ name: "Estadio Nacional", address: "Av. Paseo de la República cdra 9 con Puente Peatonal, Cercado de Lima/La Victoria", coordinatelat: "-12.068615", coordinatelng: "-77.032185", },
    { /* 20 */ name: "Mexico", address: "Av. Paseo de la República cdra 13 con Puente México, Cercado de Lima/La Victoria", coordinatelat: "-12.076835", coordinatelng: "-77.028837", },
    { /* 21 */ name: "Canadá", address: "Av. Paseo de la República cdra 19 con Puente Canadá, Lince/La Victoria", coordinatelat: "-12.082416", coordinatelng: "-77.026531", },
    { /* 22 */ name: "Javier Prado", address: "Av. Paseo de la República cdra 28 con Puente Javier Prado, San Isidro", coordinatelat: "-12.090815", coordinatelng: "-77.022888", },
    { /* 23 */ name: "Canaval y Moreira", address: "Av. Paseo de la República cdra 32 con Puente Canaval y Moreira, San Isidro", coordinatelat: "-12.096784", coordinatelng: "-77.025071", },
    { /* 24 */ name: "Aramburú", address: "Av. Paseo de la República cdra 37 con Puente Aramburú, San Isidro", coordinatelat: "-12.102821", coordinatelng: "-77.027336", },
    { /* 25 */ name: "Domingo Orué", address: "Av. Paseo de la República cdra 43 con Puente Domingo Oru&eacute, San Isidro", coordinatelat: "-12.108596", coordinatelng: "-77.026386", },
    { /* 26 */ name: "Angamos", address: "Av. Paseo de la República cdra 48 con Puente Angamos, San Isidro", coordinatelat: "-12.113484", coordinatelng: "-77.025983", },
    { /* 27 */ name: "Ricardo Palma", address: "Av. Paseo de la República cdra 55 con Puente Ricardo Palma, Miraflores/Surquillo", coordinatelat: "-12.119123", coordinatelng: "-77.025871", },
    { /* 28 */ name: "Benavides", address: "Av. Paseo de la República cdra 59 con Puente Benavides, Miraflores", coordinatelat: "-12.125338", coordinatelng: "-77.024138", },
    { /* 29 */ name: "28 de julio", address: "Av. Paseo de la República cdra 61 con Puente Miraflores, Miraflores", coordinatelat: "-12.129586", coordinatelng: "-77.022786", },
    { /* 30 */ name: "Plaza de Flores", address: "Av. Rosendo Vidaurre cdra 5 y 6, Barranco", coordinatelat: "-12.135965", coordinatelng: "-77.018433", },
    { /* 31 */ name: "Balta", address: "Av. República de Panamá (Bolognesi) cdra 10 con óvalo Balta, Barranco", coordinatelat: "-12.141722", coordinatelng: "-77.017797", },
    { /* 32 */ name: "Bulevar", address: "Av. República de Panamá (Bolognesi) cdra 3 con calle Juan Pazos, Barranco", coordinatelat: "-12.148067", coordinatelng: "-77.020061", },
    { /* 33 */ name: "Estadio Unión", address: "Av. Escuela Militar cdra 2 con Pasaje Anaya, Barranco", coordinatelat: "-12.152736", coordinatelng: "-77.019734", },
    { /* 34 */ name: "Escuela Militar", address: "Av. Escuela Militar cdra 8, Chorrillos", coordinatelat: "-12.160800", coordinatelng: "-77.019128", },
    { /* 35 */ name: "Terán", address: "Av. Prolongación Paseo de la República cdra 1 con Av. Fernando Terán cdra 8, Chorrillos", coordinatelat: "-12.168325", coordinatelng: "-77.018795", },
    { /* 36 */ name: "Rosario de Villa", address: "Av. Prolongación Paseo de la República cdra 8 con Jr. Costa Azul, Chorillos", coordinatelat: "-12.173512", coordinatelng: "-77.014761", },
    { /* 37 */ name: "Matellini", address: "Av. Prolongación Paseo de la República cdra 18 con Av. Ariosto Matellini, Chorillos", coordinatelat: "-12.178996", coordinatelng: "-77.009783", },
  ],
  routes: [
  { name: "Regular A",
    directions: [
    { name: "Central » Naranjal", days: [1,2,3,4,5], hours: ["05:40","23:00"], typeOfSchedule: "Intervals", stations: [0,1,2,3,4,5,6,7,8,9,10,11,15,16,17,18], },
    { name: "Naranjal » Central", days: [1,2,3,4,5], hours: ["05:00","22:30"], typeOfSchedule: "Intervals", stations: [0,1,2,3,4,5,6,7,8,9,10,11,15,16,17,18], },
    { name: "Central » Naranjal", days: [6], hours: ["05:40","22:45"], typeOfSchedule: "Intervals", stations: [0,1,2,3,4,5,6,7,8,9,10,11,15,16,17,18], },
    { name: "Naranjal » Central", days: [6], hours: ["05:00","22:15"], typeOfSchedule: "Intervals", stations: [0,1,2,3,4,5,6,7,8,9,10,11,15,16,17,18], },
    { name: "Central » Naranjal", days: [0], hours: ["05:55","22:00"], typeOfSchedule: "Intervals", stations: [0,1,2,3,4,5,6,7,8,9,10,11,15,16,17,18], },
    { name: "Naranjal » Central", days: [0], hours: ["05:15","21:55"], typeOfSchedule: "Intervals", stations: [0,1,2,3,4,5,6,7,8,9,10,11,15,16,17,18], },
    ]
  },
  { name: "Regular B",
    directions: [
    { name: "Matellini » Naranjal", days: [1,2,3,4,5], hours: ["09:20","23:00"], typeOfSchedule: "Intervals", stations: [0,1,2,3,4,5,6,7,8,9,10,12,13,14,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37], },
    { name: "Naranjal » Matellini", days: [1,2,3,4,5], hours: ["09:00","23:00"], typeOfSchedule: "Intervals", stations: [0,1,2,3,4,5,6,7,8,9,10,12,13,14,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37], },
    { name: "Matellini » Naranjal", days: [6], hours: ["05:25","23:00"], typeOfSchedule: "Intervals", stations: [0,1,2,3,4,5,6,7,8,9,10,12,13,14,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37], },
    { name: "Naranjal » Matellini", days: [6], hours: ["05:00","23:00"], typeOfSchedule: "Intervals", stations: [0,1,2,3,4,5,6,7,8,9,10,12,13,14,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37], },
    { name: "Matellini » Naranjal", days: [0], hours: ["05:35","22:00"], typeOfSchedule: "Intervals", stations: [0,1,2,3,4,5,6,7,8,9,10,12,13,14,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37], },
    { name: "Naranjal » Matellini", days: [0], hours: ["05:00","22:00"], typeOfSchedule: "Intervals", stations: [0,1,2,3,4,5,6,7,8,9,10,12,13,14,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37], },
    ]
  },
  { name: "Regular C",
    directions: [
    { name: "Matellini » Castilla", days: [1,2,3,4,5], hours: ["05:00","22:05"], typeOfSchedule: "Intervals", stations: [11,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37], },
    { name: "Castilla » Matellini", days: [1,2,3,4,5], hours: ["05:00","23:00"], typeOfSchedule: "Intervals", stations: [11,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37], },
    { name: "Matellini » Castilla", days: [6], hours: ["05:15","22:05"], typeOfSchedule: "Intervals", stations: [11,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37], },
    { name: "Castilla » Matellini", days: [6], hours: ["05:30","22:55"], typeOfSchedule: "Intervals", stations: [11,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37], },
    { name: "Matellini » Castilla", days: [0], hours: ["05:25","22:00"], typeOfSchedule: "Intervals", stations: [11,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37], },
    { name: "Castilla » Matellini", days: [0], hours: ["05:30","21:55"], typeOfSchedule: "Intervals", stations: [11,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37], },
    ]
  },
  { name: "Regular D",
    directions: [
    { name: "Central » Naranjal (Mañanas)", days: [1,2,3,4,5], hours: ["05:35","09:00"], typeOfSchedule: "Intervals", stations: [0,1,2,3,4,5,6,7,8,9,10,12,13,14,18], },
    { name: "Naranjal » Central (Mañanas)", days: [1,2,3,4,5], hours: ["05:00","09:30"], typeOfSchedule: "Intervals", stations: [0,1,2,3,4,5,6,7,8,9,10,12,13,14,18], },
    ]
  },
  { name: "Expreso 1",
    directions: [
    { name: "Naranjal » Matellini (Mañanas)", days: [1,2,3,4,5], hours: ["05:30","09:20"], typeOfSchedule: "Intervals", stations: [18,19,22,23,26,29,31,32,33,34,35,36,37], },
    { name: "Matellini » Naranjal (Mañanas)", days: [1,2,3,4,5], hours: ["05:00","09:00"], typeOfSchedule: "Intervals", stations: [37,36,35,34,33,32,31,29,26,23,22,19,18], },
    { name: "Naranjal » Matellini (Tardes)", days: [1,2,3,4,5], hours: ["17:30","21:30"], typeOfSchedule: "Intervals", stations: [18,19,22,23,26,28,29,31,32,33,34,35,36,37], },
    { name: "Matellini » Naranjal (Tardes)", days: [1,2,3,4,5], hours: ["17:00","21:00"], typeOfSchedule: "Intervals", stations: [37,36,35,34,33,32,31,29,26,22,19,18], },
    ]
  },
  { name: "Expreso 2",
    directions: [
    { name: "Naranjal » 28 de julio (Mañanas)", days: [1,2,3,4,5], hours: ["05:00","09:00"], typeOfSchedule: "Intervals", stations: [0,21,22,27,29], },
    { name: "Plaza de Flores » Naranjal (Mañanas)", days: [1,2,3,4,5], hours: ["05:30","09:00"], typeOfSchedule: "Intervals", stations: [30,28,26,23,22,18,14,10,8,5,1,0], },
    { name: "Ricardo Palma » Naranjal (Tardes)", days: [1,2,3,4,5], hours: ["17:00","21:00"], typeOfSchedule: "Intervals", stations: [27,22,21,0], },
    ]
  },
  { name: "Expreso 3",
    directions: [
    { name: "Naranjal » 28 de Julio (Mañanas)", days: [1,2,3,4,5], hours: ["05:00","09:00"], typeOfSchedule: "Intervals", stations: [0,26,28,29], },
    { name: "Benavides » Naranjal (Tardes)", days: [1,2,3,4,5], hours: ["17:00","21:00"], typeOfSchedule: "Intervals", stations: [28,26,0], },
    ]
  },
  { name: "Expreso 4",
    directions: [
    { name: "Plaza de Flores » Naranjal", days: [6], hours: ["06:10","21:35"], typeOfSchedule: "Intervals", stations: [0,1,5,8,10,12,14,18,22,23,26,30], },
    { name: "Naranjal » Plaza de Flores", days: [6], hours: ["06:00","21:00"], typeOfSchedule: "Intervals", stations: [0,1,5,8,10,12,14,18,22,23,26,30], },
    ]
  },
  { name: "Expreso 5",
    directions: [
    { name: "Naranjal » Plaza de Flores", days: [1,2,3,4,5], hours: ["09:00","17:00"], typeOfSchedule: "Intervals", stations: [0,3,5,8,14,18,21,22,23,26,27,30], },
    { name: "Plaza de Flores » Naranjal", days: [1,2,3,4,5], hours: ["09:00","17:00"], typeOfSchedule: "Intervals", stations: [30,27,26,23,22,21,18,14,10,8,7,5,3,0], },
    ]
  },
  { name: "Expreso 6",
    directions: [
    { name: "Izaguirre » Benavides (Mañanas)", days: [1,2,3,4,5], hours: ["05:30","09:00"], typeOfSchedule: "Intervals", stations: [1,3,18,22,23,26,28,30], },
    ]
  },
  { name: "Expreso 7",
    directions: [
    { name: "Tomás Valle » Angamos (Mañanas)", days: [1,2,3,4,5], hours: ["05:30","09:00"], typeOfSchedule: "Intervals", stations: [5,18,22,23,26], },
    ]
  },
  { name: "Expreso 8",
    directions: [
    { name: "Izaguirre » Plaza de Flores (Mañanas)", days: [1,2,3,4,5], hours: ["05:00","08:20"], typeOfSchedule: "Intervals", stations: [1,3,5,8,10,14,18,22,23,26,28,30], },
    { name: "Plaza de Flores » Izaguirre (Tardes)", days: [1,2,3,4,5], hours: ["17:00","21:00"], typeOfSchedule: "Intervals", stations: [30,28,26,23,22,18,14,10,8,5,3,1], },
    ]
  },
  { name: "Expreso 9",
    directions: [
    { name: "UNI » Benavides (Mañanas)", days: [1,2,3,4,5], hours: ["05:30","09:00"], typeOfSchedule: "Intervals", stations: [8,10,23,26,28], },
    ]
  },
  { name: "Súper Expreso",
    directions: [
    { name: "Naranjal » Plaza de Flores (Mañanas)", days: [1,2,3,4,5], hours: ["06:00","09:00"], typeOfSchedule: "Intervals", stations: [0,23,24,27], },
    { name: "Plaza de Flores » Naranjal (Tardes)", days: [1,2,3,4,5], hours: ["17:00","21:00"], typeOfSchedule: "Intervals", stations: [24,23,0], },
    ]
  },
  { name: "Súper Expreso Norte",
    directions: [
    { name: "Naranjal » Central (Mañanas)", days: [1,2,3,4,5], hours: ["05:00","09:00"], typeOfSchedule: "Intervals", stations: [0,12,13,14,18], },
    { name: "Central » Naranjal (Mañanas)", days: [1,2,3,4,5], hours: ["05:30","09:00"], typeOfSchedule: "Intervals", stations: [18,0], },
    { name: "Naranjal » Central (Tardes)", days: [1,2,3,4,5], hours: ["17:00","21:00"], typeOfSchedule: "Intervals", stations: [0,18], },
    { name: "Central » Naranjal (Tardes)", days: [1,2,3,4,5], hours: ["17:30","21:00"], typeOfSchedule: "Intervals", stations: [18,14,13,12,0], },
    ]
  },
  ],
},
{
  name: "Alimentadora Norte",
  stations:
  [
    { /* 0 */ name: "Naranjal", address: "Av. Túpac Amaru cdra 45 con Av. Chinchaysuyo cdra 1 - Independencia", coordinatelat: "-11.982013", coordinatelng: "-77.058663", },
    { /* 1 */ name: "Ca. Huáscar", address: "Av. Chinchaysuyo cdra 1 con Ca. Huáscar - Independencia", coordinatelat: "-11.979987", coordinatelng: "-77.057894", },
    { /* 2 */ name: "Ca. Paracas", address: "Av. Indoamérica con Ca. Paracas - Independencia", coordinatelat: "-11.981121", coordinatelng: "-77.054159", },
    { /* 3 */ name: "Ca. Huanacaure", address: "Av. Indoamérica con Ca. Huanacaure - Independencia", coordinatelat: "-11.982674", coordinatelng: "-77.053537", },
    { /* 4 */ name: "Ca. Pisac", address: "Ca. Huanacaure con Ca. Pisac - Independencia", coordinatelat: "-11.981593", coordinatelng: "-77.049106", },
    { /* 5 */ name: "Ca. Huatanay", address: "Ca. Huatanay con Ca. Quipaypampa - Independencia", coordinatelat: "-11.981651", coordinatelng: "-77.048045", },
    { /* 6 */ name: "Ca. Yauri", address: "Av. Coricancha con Ca. Yauri - Independencia", coordinatelat: "-11.9811", coordinatelng: "-77.043495", },
    { /* 7 */ name: "Ca. Río Coricancha", address: "Av. Coricancha con Ca. Río Vilcanota - Independencia", coordinatelat: "-11.980754", coordinatelng: "-77.040618", },
    { /* 8 */ name: "Ca. Vilcashuaman", address: "Ca. Vilcashuaman", coordinatelat: "-11.979704", coordinatelng: "-77.037819", },
    { /* 9 */ name: "Ca. Quillabamba", address: "Ca. Quillabamba con Ca. Hermanos Ayar", coordinatelat: "-11.979305", coordinatelng: "-77.039579", },
    { /* 10 */ name: "Ca. Cushihuallar", address: "Av. Coricancha con Ca. Cushihuallar", coordinatelat: "-11.980517", coordinatelng: "-77.040372", },
    { /* 11 */ name: "Ca. Muquiyauyos", address: "Av. Huanacaure con Ca. Muquiyauyos", coordinatelat: "-11.981625", coordinatelng: "-77.050093", },
    { /* 12 */ name: "Ca. 15 de Julio", address: "Av. Chinchaysuyo cdra 1 con Ca. 15 de Julio", coordinatelat: "-11.97983", coordinatelng: "-77.058397", },
  ],
  routes: [
  { name: "Alimentador AN-01 Tahuantinsuyo",
    directions: [
    { name: "AN-01", days: [0,1,2,3,4,5,6], hours: ["06:00","23:00"], typeOfSchedule: "Intervals", stations: [0,1,2,3,4,5,6,7,8,9,10,6,5,11,3,2,12,0], },
    ]
  },
  { name: "Alimentador AN-02 Tungasuca",
    directions: [
    { name: "AN-02", days: [0,1,2,3,4,5,6], hours: ["06:00","23:00"], typeOfSchedule: "Intervals", stations: [], },
    ]
  },
  { name: "Alimentador AN-03 Trapiche",
    directions: [
    { name: "AN-03", days: [0,1,2,3,4,5,6], hours: ["06:00","23:00"], typeOfSchedule: "Intervals", stations: [], },
    ]
  },
  { name: "Alimentador AN-04 Collique",
    directions: [
    { name: "AN-04 Regular", days: [0,1,2,3,4,5,6], hours: ["06:00","23:00"], typeOfSchedule: "Intervals", stations: [], },
    { name: "AN-04 Directo Mañana", days: [0,1,2,3,4,5,6], hours: ["06:00","23:00"], typeOfSchedule: "Intervals", stations: [], },
    { name: "AN-04 Directo Tarde", days: [0,1,2,3,4,5,6], hours: ["06:00","23:00"], typeOfSchedule: "Intervals", stations: [], },
    ]
  },
  { name: "Alimentador AN-05 Payet",
    directions: [
    { name: "AN-05", days: [0,1,2,3,4,5,6], hours: ["06:00","23:00"], typeOfSchedule: "Intervals", stations: [], },
    ]
  },
  { name: "Alimentador AN-06 Puno",
    directions: [
    { name: "AN-06", days: [0,1,2,3,4,5,6], hours: ["06:00","23:00"], typeOfSchedule: "Intervals", stations: [], },
    ]
  },
  { name: "Alimentador AN-07 Belaunde",
    directions: [
    { name: "AN-07 Regular", days: [0,1,2,3,4,5,6], hours: ["06:00","23:00"], typeOfSchedule: "Intervals", stations: [], },
    { name: "AN-07 Directo Mañana", days: [0,1,2,3,4,5,6], hours: ["06:00","23:00"], typeOfSchedule: "Intervals", stations: [], },
    { name: "AN-07 Directo Tarde", days: [0,1,2,3,4,5,6], hours: ["06:00","23:00"], typeOfSchedule: "Intervals", stations: [], },
    ]
  },
  { name: "Alimentador AN-08 Milagro de Jesús",
    directions: [
    { name: "AN-08 Regular", days: [0,1,2,3,4,5,6], hours: ["06:00","23:00"], typeOfSchedule: "Intervals", stations: [], },
    { name: "AN-08 Directo Mañana", days: [0,1,2,3,4,5,6], hours: ["06:00","23:00"], typeOfSchedule: "Intervals", stations: [], },
    { name: "AN-08 Directo Tarde", days: [0,1,2,3,4,5,6], hours: ["06:00","23:00"], typeOfSchedule: "Intervals", stations: [], },
    ]
  },
  { name: "Alimentador AN-09 Carabayllo",
    directions: [
    { name: "AN-09 Regular", days: [0,1,2,3,4,5,6], hours: ["06:00","23:00"], typeOfSchedule: "Intervals", stations: [], },
    { name: "AN-09 Directo Mañana", days: [0,1,2,3,4,5,6], hours: ["06:00","23:00"], typeOfSchedule: "Intervals", stations: [], },
    { name: "AN-09 Directo Tarde", days: [0,1,2,3,4,5,6], hours: ["06:00","23:00"], typeOfSchedule: "Intervals", stations: [], },
    ]
  },
  { name: "Alimentador AN-10 Santo Domingo",
    directions: [
    { name: "AN-10", days: [0,1,2,3,4,5,6], hours: ["06:00","23:00"], typeOfSchedule: "Intervals", stations: [], },
    ]
  },
  { name: "Alimentador AN-12 Puente Piedra",
    directions: [
    { name: "AN-12", days: [0,1,2,3,4,5,6], hours: ["06:00","23:00"], typeOfSchedule: "Intervals", stations: [], },
    ]
  },
  { name: "Alimentador AN-13 La Ensenada",
    directions: [
    { name: "AN-13", days: [0,1,2,3,4,5,6], hours: ["06:00","23:00"], typeOfSchedule: "Intervals", stations: [], },
    ]
  },
  { name: "Alimentador AN-14 Bertello",
    directions: [
    { name: "AN-14", days: [0,1,2,3,4,5,6], hours: ["06:00","23:00"], typeOfSchedule: "Intervals", stations: [], },
    ]
  },
  { name: "Alimentador AN-15 Los Alisos",
    directions: [
    { name: "AN-15", days: [0,1,2,3,4,5,6], hours: ["06:00","23:00"], typeOfSchedule: "Intervals", stations: [], },
    ]
  },
  { name: "Alimentador AN-16 Los Olivos",
    directions: [
    { name: "AN-16", days: [0,1,2,3,4,5,6], hours: ["06:00","23:00"], typeOfSchedule: "Intervals", stations: [], },
    ]
  },
  { name: "Alimentador AN-17 Antúnez de Mayolo",
    directions: [
    { name: "AN-17", days: [0,1,2,3,4,5,6], hours: ["06:00","23:00"], typeOfSchedule: "Intervals", stations: [], },
    ]
  },
  ]
},
]
};
