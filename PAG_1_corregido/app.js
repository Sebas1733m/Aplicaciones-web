'use strict';

const IMG = { futbol:'img/futbol.svg', basquetbol:'img/basquetbol.svg', tenis:'img/tenis.svg', auto:'img/auto.svg', nfl:'img/futbol-americano.svg' };
const ICONO = { todos:'fa-solid fa-layer-group', futbol:'fa-solid fa-futbol', basquetbol:'fa-solid fa-basketball', tenis:'fa-solid fa-table-tennis-paddle-ball', auto:'fa-solid fa-flag-checkered', nfl:'fa-solid fa-football' };

const DEPORTES = { todos:'Todos', futbol:'Fútbol', basquetbol:'Básquetbol', tenis:'Tenis', auto:'Automovilismo', nfl:'Fútbol americano' };

const FECHA_DATOS = '3 de octubre de 2026';


const PARTIDOS = [
  ['Dinamarca','Portugal',2,4,'1 oct'], ['Alemania','Serbia',2,0,'1 oct'], ['Grecia','Países Bajos',2,2,'1 oct'], ['Gales','Noruega',2,1,'1 oct'],
  ['Bélgica','Turquía',3,0,'2 oct'], ['Francia','Italia',1,1,'2 oct'], ['Irlanda','Austria',2,2,'1 oct'], ['Israel','Kosovo',0,0,'1 oct'],
].map((p, i) => ({ id:i, dep:'futbol', liga:'Liga de Naciones', local:p[0], visita:p[1], gl:p[2], gv:p[3], fecha:p[4], estado:'FINAL' }));


const FECHA_BASQ = '4 oct';
[
  ['Lleida','San Pablo',81,94,'FINAL'],
  ['Básquet Coruña','Bilbao Basket',104,101,'FINAL T.E.'],
  ['Obradoiro','Real Madrid',107,114,'FINAL T.E.'],
].forEach((p, i) => PARTIDOS.push({ id:PARTIDOS.length, dep:'basquetbol', liga:'Liga ACB', local:p[0], visita:p[1], gl:p[2], gv:p[3], fecha:FECHA_BASQ, estado:p[4] }));

[
  ['M. Berrettini','A. Vallejo',0,2,'FINAL'],
  ['U. Humbert','J. Lehečka',1,2,'FINAL'],
  ['J. Munar','K. Jacquet',2,0,'FINAL'],
  ['C. Alcaraz','D. Shapovalov',1,0,'RETIRADO'],
].forEach(p => PARTIDOS.push({ id:PARTIDOS.length, dep:'tenis', liga:'ATP 500 Tokio', local:p[0], visita:p[1], gl:p[2], gv:p[3], fecha:'3 oct', estado:p[4] }));
// Fútbol americano: NFL, Semana 4 de la temporada 2026 (1 al 4 de octubre). Orden: visitante, local.
[
  ['Steelers','Browns',24,27,'1 oct'],
  ['Colts','Commanders',30,13,'4 oct'],
  ['Titans','Ravens',18,24,'4 oct'],
  ['Patriots','Bills',29,26,'4 oct'],
  ['Jets','Bears',12,23,'4 oct'],
  ['Jaguars','Bengals',22,17,'4 oct'],
  ['Cowboys','Texans',34,30,'4 oct'],
  ['Cardinals','Giants',24,36,'4 oct'],
  ['Packers','Buccaneers',17,14,'4 oct'],
  ['Rams','Eagles',24,20,'4 oct'],
  ['Dolphins','Vikings',10,15,'4 oct'],
  ['Broncos','49ers',14,24,'4 oct'],
  ['Chiefs','Raiders',30,27,'4 oct'],
  ['Chargers','Seahawks',23,30,'4 oct'],
  ['Lions','Panthers',26,32,'4 oct'],
].forEach(p => PARTIDOS.push({ id:PARTIDOS.length, dep:'nfl', liga:'NFL Semana 4', local:p[0], visita:p[1], gl:p[2], gv:p[3], fecha:p[4], estado:'FINAL' }));

const TORNEOS = [
  { dep:'futbol', nombre:'Liga de Naciones UEFA – Liga A (grupo de Francia)', cols:['#','Selección','DG','Pts'],
    filas:[[1,'Francia','+2',7],[2,'Bélgica','+4',6],[3,'Italia','+1',4],[4,'Turquía','-7',0]],
    resultados:['Francia 1-1 Italia','Bélgica 3-0 Turquía'] },
  { dep:'futbol', nombre:'Liga de Naciones UEFA – Liga B (grupo de Suiza)', cols:['#','Selección','DG','Pts'],
    filas:[[1,'Suiza','+6',6],[2,'Eslovenia','+2',4],[3,'Escocia','-3',1],[4,'Macedonia del Norte','-5',0]],
    resultados:['Irlanda 2-2 Austria','Israel 0-0 Kosovo'] },
  { dep:'futbol', nombre:'Liga MX – Apertura 2026 (tras la Jornada 10)', cols:['#','Equipo','PJ','DG','Pts'],
    filas:[[1,'Toluca',10,'+11',20],[2,'América',9,'+11',20],[3,'Chivas',10,'+7',18],[4,'Querétaro',9,'+5',17],[5,'León',10,'+3',17],[6,'Atlas',10,'-1',17],[7,'Cruz Azul',10,'+1',16],[8,'Tijuana',9,'+1',14],[9,'Puebla',10,'-1',14],[10,'Monterrey',9,'+2',13],[11,'Pachuca',10,'+4',12],[12,'Pumas',10,'-2',12],[13,'Atlético San Luis',10,'-4',12],[14,'Atlante',10,'-3',11],[15,'Tigres',10,'-3',10],[16,'Santos Laguna',10,'-5',10]],
    resultados:['Atlante 4-2 Monterrey','Atlas 3-2 Tijuana','Cruz Azul 3-3 Toluca','Chivas 0-2 Querétaro','Santos 1-0 Pachuca','Tigres 1-0 Puebla','Pumas 2-3 Atlético San Luis','León 2-1 Juárez','Necaxa 2-4 América'] },
  { dep:'futbol', nombre:'Champions League 2026-27 – Jornada 1 (primeros 16)', cols:['#','Equipo','PJ','Pts'],
    filas:[[1,'PSG',1,3],[2,'Bayern Múnich',1,3],[3,'Barcelona',1,3],[4,'Manchester United',1,3],[5,'Como',1,3],[6,'Sporting CP',1,3],[6,'Stuttgart',1,3],[8,'Manchester City',1,3],[9,'Aston Villa',1,3],[9,'Lens',1,3],[9,'Real Betis',1,3],[12,'Dortmund',1,3],[13,'Liverpool',1,3],[13,'Real Madrid',1,3],[15,'Arsenal',1,3],[16,'AEK Atenas',1,3]],
    resultados:['PSG 6-1 Slovan Bratislava','Bayern 5-0 Bodø/Glimt','Man. United 4-0 Sabah','Como 4-1 Leipzig','Sporting 3-1 Galatasaray','Slavia Praga 2-3 Lens','Liverpool 2-1 Atlético','Napoli 0-1 Arsenal','Fenerbahçe 1-1 Roma','PSV 1-1 Shakhtar'] },
];

const IMG_CIRCUITO = 'img/circuito-sepang.png';
TORNEOS.push({
  dep:'auto', nombre:'Fórmula 1 2026 – GP de Baréin en Sepang, Malasia (carrera del 4 de octubre)',
  cols:['Pos','Piloto','Equipo','Parrilla','Pits','Vueltas','Pts','Intervalo'],
  filas:[
    [1,'M. Verstappen','Red Bull Racing',1,3,55,25,'1:47:14.808'],
    [2,'A. K. Antonelli','Mercedes',3,3,55,18,'+2.307'],
    [3,'L. Hamilton','Ferrari',2,2,55,15,'+4.919'],
    [4,'C. Leclerc','Ferrari',4,4,55,12,'+7.258'],
    [5,'I. Hadjar','Red Bull Racing',8,3,55,10,'+8.571'],
    [6,'O. Piastri','McLaren',6,4,55,8,'+9.454'],
    [7,'L. Lawson','Racing Bulls',11,3,55,6,'+12.753'],
    [8,'F. Alonso','Aston Martin',12,3,55,4,'+13.372'],
    [9,'L. Norris','McLaren',5,3,55,2,'+13.993'],
    [10,'A. Lindblad','Racing Bulls',22,3,55,1,'+15.928'],
    [11,'N. Hülkenberg','Audi',13,4,55,0,'+17.404'],
    [12,'L. Stroll','Aston Martin',14,4,55,0,'+18.052'],
    [13,'F. Colapinto','Alpine',21,3,55,0,'+18.997'],
    [14,'O. Bearman','Haas',16,3,55,0,'+22.305'],
    [15,'E. Ocon','Haas',17,3,55,0,'+22.532'],
    [16,'P. Gasly','Alpine',9,4,55,0,'+25.315'],
    [17,'C. Sainz','Williams',15,3,55,0,'+25.401'],
    [18,'G. Bortoleto','Audi',10,5,55,0,'+28.233'],
    [19,'S. Pérez','Cadillac',20,7,55,0,'+29.233'],
    ['–','G. Russell','Mercedes',7,3,50,0,'DNF'],
    ['–','A. Albon','Williams',18,3,42,0,'DNF'],
    ['–','V. Bottas','Cadillac',19,0,7,0,'DNF'],
  ],
  tituloLista:'Notas de la carrera',
  resultados:['La salida se retrasó por lluvia: el GP de Baréin se corrió en Sepang (Malasia), a 55 vueltas.','Abandonos: Russell (Mercedes), Albon (Williams) y Bottas (Cadillac).','Pts = puntos de la carrera; Pits = paradas en boxes; DNF = no terminó.'],
  imagen:IMG_CIRCUITO, imagenAlt:'Trazado del circuito internacional de Sepang, Malasia', imagenPie:'Circuito internacional de Sepang, Malasia',
})


TORNEOS.push({
  dep:'tenis', nombre:'ATP 500 Tokio, Japón – cancha dura (exterior) · cuartos de final', cols:['Partido','Sets','Estado'],
  filas:[
    ['M. Berrettini vs. A. Vallejo','0-2','Final'],
    ['U. Humbert vs. J. Lehečka','1-2','Final'],
    ['J. Munar vs. K. Jacquet','2-0','Final'],
    ['C. Alcaraz vs. D. Shapovalov','1-0','Retirado'],
  ],
  resultados:['Alcaraz 7-6(3) y 2-1 sobre Shapovalov, que se retiró por lesión','Munar 6-4 y 6-2 sobre Jacquet','Semifinal: Alcaraz vs. Munar'] });
;


TORNEOS.push({
  dep:'nfl', nombre:'NFL 2026 – Semana 4 (resultados)', cols:['Fecha','Partido','Marcador'],
  filas:[
    ['Jue 1 oct','Steelers @ Browns','24-27'],
    ['Dom 4 oct','Colts vs. Commanders (Londres)','30-13'],
    ['Dom 4 oct','Titans @ Ravens','18-24'],
    ['Dom 4 oct','Patriots @ Bills','29-26'],
    ['Dom 4 oct','Jets @ Bears','12-23'],
    ['Dom 4 oct','Jaguars @ Bengals','22-17'],
    ['Dom 4 oct','Cowboys @ Texans','34-30'],
    ['Dom 4 oct','Cardinals @ Giants','24-36'],
    ['Dom 4 oct','Packers @ Buccaneers','17-14'],
    ['Dom 4 oct','Rams @ Eagles','24-20'],
    ['Dom 4 oct','Dolphins @ Vikings','10-15'],
    ['Dom 4 oct','Broncos @ 49ers','14-24'],
    ['Dom 4 oct','Chiefs @ Raiders','30-27'],
    ['Dom 4 oct','Chargers @ Seahawks','23-30'],
    ['Dom 4 oct','Lions @ Panthers','26-32'],
  ],
  tituloLista:'Notas de la semana',
  resultados:['Invictos (4-0): Chiefs, 49ers y Vikings','Sin victorias (0-4): Dolphins, Titans, Texans, Buccaneers y Chargers','Falta el partido del lunes 5 de octubre: Falcons @ Saints','El formato es visitante @ local; el de Londres se jugó en el Tottenham Hotspur Stadium'] });

const NOTICIAS = [
  { id:1, dep:'futbol', cat:'Análisis', titulo:'Toluca y América empatan en la cima del Apertura 2026', fecha:'27 sep 2026', img:'img/noticias/toluca-america-cima.webp', texto:'Tras la Jornada 10, Toluca y América suman 20 puntos y ambos lideran la tabla; Toluca va primero por diferencia de goles (+11). América venció 4-2 a Necaxa y todavía tiene un partido pendiente.' },
  { id:2, dep:'futbol', cat:'General', titulo:'Cruz Azul y Toluca empatan 3-3 en un partidazo', fecha:'27 sep 2026', img:'img/noticias/cruzazul-toluca.jpg', texto:'Uno de los juegos más atractivos de la Jornada 10 terminó igualado a tres goles.' },
  { id:3, dep:'futbol', cat:'General', titulo:'Chivas cae 0-2 ante Querétaro y baja al tercer lugar', fecha:'26 sep 2026', img:'img/noticias/chivas-queretaro.webp', texto:'El Guadalajara perdió en el Estadio Akron cuando tenía la oportunidad de alcanzar el liderato; ahora suma 18 puntos.' },
  { id:4, dep:'futbol', cat:'General', titulo:'Francia empata 1-1 con Italia y lidera su grupo de la Liga de Naciones', fecha:'2 oct 2026', img:'img/noticias/francia-italia.webp', texto:'Con el empate, Francia suma 7 puntos en la Liga A, seguida de Bélgica (6), que goleó 3-0 a Turquía.' },
  { id:5, dep:'futbol', cat:'Resultados', titulo:'PSG golea 6-1 al Slovan y Bayern 5-0 al Bodø/Glimt en la Champions', fecha:'9-10 sep 2026', img:'img/noticias/psg-bayern-champions.webp', texto:'Las goleadas marcaron el arranque de la fase de liga 2026-27, con 36 equipos en una sola tabla.' },
  { id:6, dep:'futbol', cat:'Resultados', titulo:'Dinamarca cae 2-4 ante Portugal en la Liga de Naciones', fecha:'1 oct 2026', img:'img/noticias/dinamarca-portugal.webp', texto:'Portugal, que busca su tercer título en la competencia, ganó de visita en Copenhague.' },
  { id:7, dep:'basquetbol', cat:'Resultados', titulo:'Real Madrid vence 114-107 a Obradoiro en tiempo extra', fecha:'4 oct 2026', img:'img/noticias/realmadrid-obradoiro.webp', texto:'El Real Madrid se llevó un duelo parejo de la Liga ACB que tuvo que definirse en tiempo extra.' },
  { id:8, dep:'basquetbol', cat:'Resultados', titulo:'Básquet Coruña supera 104-101 a Bilbao Basket en tiempo extra', fecha:'4 oct 2026', img:'img/noticias/coruna-bilbao.webp', texto:'Otro partido de la Liga ACB que no se resolvió en el tiempo regular y se decidió por solo tres puntos.' },
  { id:9, dep:'basquetbol', cat:'Resultados', titulo:'San Pablo se impone 94-81 a Lleida en la Liga ACB', fecha:'4 oct 2026', img:'img/noticias/sanpablo-lleida.webp', texto:'San Pablo ganó por 13 puntos en tiempo regular. Más tarde la jornada continúa con Zaragoza-Valencia, Baskonia-Girona y UCAM Murcia-Barça.' },
  { id:10, dep:'auto', cat:'Resultados', titulo:'Verstappen gana el GP de Baréin en Sepang, su primera victoria del año', fecha:'4 oct 2026', img:'img/noticias/verstappen-bareyn.webp', texto:'Max Verstappen (Red Bull) ganó la carrera, que se disputó en Malasia y arrancó con retraso por lluvia. Kimi Antonelli (Mercedes) fue segundo y Lewis Hamilton (Ferrari) tercero.' },
  { id:11, dep:'auto', cat:'Mundial', titulo:'Antonelli amplía su ventaja en el campeonato tras el abandono de Russell', fecha:'4 oct 2026', img:'img/noticias/antonelli-campeonato.webp', texto:'Con el segundo lugar, Antonelli lidera con 320 puntos, 84 más que su compañero George Russell, quien abandonó la carrera a falta de pocas vueltas.' },
  { id:12, dep:'auto', cat:'Resultados', titulo:'Checo Pérez termina 19º con Cadillac en el GP de Baréin', fecha:'4 oct 2026', img:'img/noticias/checo-bareyn.webp', texto:'El mexicano fue el último de los pilotos que vieron la bandera a cuadros en Sepang.' },
  { id:13, dep:'tenis', cat:'Resultados', titulo:'Alcaraz avanza a semifinales en Tokio tras la retirada de Shapovalov', fecha:'3 oct 2026', img:'img/noticias/alcaraz-tokio.webp', texto:'Carlos Alcaraz ganaba 7-6(3) y 2-1 en los cuartos de final del ATP 500 de Tokio cuando Denis Shapovalov se retiró por lesión. En semifinales se medirá a Jaume Munar.' },
  { id:14, dep:'tenis', cat:'Resultados', titulo:'Munar vence a Jacquet y habrá un español en la final de Tokio', fecha:'3 oct 2026', img:'img/noticias/munar-jacquet.webp', texto:'Jaume Munar ganó 6-4 y 6-2 a Kyrian Jacquet. Como enfrentará a Alcaraz en semifinales, uno de los dos españoles estará en la final.' },
  { id:15, dep:'nfl', cat:'Resultados', titulo:'Browns vencen 27-24 a Steelers con gol de campo de 56 yardas', fecha:'1 oct 2026', img:'img/noticias/browns-steelers.webp', texto:'Pittsburgh empató 24-24 en el último cuarto, pero Andre Szmyt acertó el gol de campo de 56 yardas con 15 segundos por jugar. Cleveland llegó a 3-1.' },
  { id:16, dep:'nfl', cat:'Resultados', titulo:'Chiefs ganan 30-27 a Raiders y siguen invictos', fecha:'4 oct 2026', img:'img/noticias/chiefs-raiders.jpg', texto:'Kansas City llegó a 4-0 y le quitó el invicto a Las Vegas. Kenneth Walker III anotó dos touchdowns con solo 19 segundos de diferencia.' },
  { id:17, dep:'nfl', cat:'Resultados', titulo:'Patriots superan 29-26 a Bills en Buffalo', fecha:'4 oct 2026', img:'img/noticias/patriots-bills.webp', texto:'Drake Maye completó 22 de 37 pases para 269 yardas y tres touchdowns. Fue la primera derrota de Buffalo en la temporada.' },
  { id:18, dep:'nfl', cat:'Resultados', titulo:'Panthers vencen 32-26 a Lions en Sunday Night Football', fecha:'4 oct 2026', img:'img/noticias/panthers-lions.webp', texto:'Tetairoa McMillan atrapó 14 pases para 192 yardas y dos touchdowns, y Bryce Young lanzó para 329 yardas. Ambos equipos quedaron 2-2.' },
];

const CALENDARIO = [
  { dep:'futbol', fecha:'Dom 4 oct', hora:'', partido:'Liga de Naciones: Kosovo vs. Austria, Gales vs. Dinamarca, Grecia vs. Alemania' },
  { dep:'basquetbol', fecha:'Dom 4 oct', hora:'09:00', partido:'Liga ACB: Zaragoza vs. Valencia' },
  { dep:'basquetbol', fecha:'Dom 4 oct', hora:'11:00', partido:'Liga ACB: Baskonia vs. Girona, UCAM Murcia vs. Barça' },
  { dep:'basquetbol', fecha:'Dom 4 oct', hora:'17:00', partido:'NBA Preseason: Jazz @ Nuggets, Warriors @ Clippers' },
  { dep:'nfl', fecha:'Lun 5 oct', hora:'', partido:'NFL Semana 4: Falcons @ Saints' },
  { dep:'futbol', fecha:'Vie 9 oct', hora:'', partido:'Liga MX: arranca la Jornada 11 del Apertura 2026 (tras la Fecha FIFA)' },
  { dep:'futbol', fecha:'Mar 13 oct', hora:'10:45', partido:'Champions: Lens vs. Sporting y Sabah vs. Slavia Praga' },
  { dep:'futbol', fecha:'Mar 13 oct', hora:'13:00', partido:'Champions: Arsenal vs. Lille, Atlético vs. Man. United, Inter vs. Brujas, Galatasaray vs. Barcelona, Viking vs. Bayern' },
  { dep:'futbol', fecha:'Mié 14 oct', hora:'10:45', partido:'Champions: Feyenoord vs. Como' },
];


const GOLES = [
  { semana:'28 sep – 4 oct',  jugador:'Troy Parrott', partido:'Irlanda vs Austria', video:'GbjMVRve3OQ' },
  { semana:'21 – 27 sep',     jugador:'Angel di Maria', partido:'Rosario Central vs Estudiantes de la Plata', video:'WOJdEmEJkj8' },
  { semana:'14 – 20 sep',     jugador:'Miguel Borja', partido:'America vs Guadalajara', video:'bMPlKcx1Eew' },
  { semana:'7 – 13 sep',      jugador:'Paulinho', partido:'Toluca vs Atlas', video:'hR02TwHgm-Q' }
];


const AGENDA_FECHA = 'Domingo 4 de octubre de 2026';
const AGENDA = [
  ['01:00','fa-solid fa-flag-checkered','Fórmula 1','Gran Premio de Baréin · Carrera',['Sky Sports','F1 TV']],
  ['07:30','fa-solid fa-football','NFL','Colts vs. Commanders',['ESPN','NFL Network']],
  ['10:00','fa-solid fa-futbol','Liga de Naciones UEFA','Kosovo vs. Austria',['Sky Sports']],
  ['11:00','fa-solid fa-football','NFL','Cowboys vs. Texans',['Nu9ve','DAZN']],
  ['11:00','fa-solid fa-football','NFL','Rams vs. Eagles',['FOX','FOX One','DAZN']],
  ['11:00','fa-solid fa-football','NFL','Patriots vs. Bills',['FOX+','FOX One','DAZN']],
  ['12:00','fa-solid fa-futbol','Liga de Expansión MX','Leones Negros vs. Dorados',['AYM Sports']],
  ['12:45','fa-solid fa-futbol','Liga de Naciones UEFA','Portugal vs. Noruega',['Sky Sports']],
  ['12:45','fa-solid fa-futbol','Liga de Naciones UEFA','Países Bajos vs. Serbia',['Sky Sports']],
  ['12:45','fa-solid fa-futbol','Liga de Naciones UEFA','Grecia vs. Alemania',['Sky Sports']],
  ['12:45','fa-solid fa-futbol','Liga de Naciones UEFA','Gales vs. Dinamarca',['Sky Sports']],
  ['14:00','fa-solid fa-baseball','MLB','Padres vs. Brewers',['FOX en Tubi','FOX One']],
  ['14:25','fa-solid fa-football','NFL','Broncos vs. 49ers',['Canal 5','DAZN']],
  ['14:25','fa-solid fa-football','NFL','Chargers vs. Seahawks',['FOX','FOX One','DAZN']],
  ['14:25','fa-solid fa-football','NFL','Chiefs vs. Raiders',['FOX+','FOX One','DAZN']],
  ['15:30','fa-solid fa-flag-checkered','NASCAR Cup Series','NASCAR Cup Series',['FOX One']],
  ['17:00','fa-solid fa-futbol','Liga MX Femenil','Guadalajara Femenil vs. FC Juárez Femenil',['FOX en Tubi','FOX One','Prime Video']],
  ['18:00','fa-solid fa-baseball','MLB','Braves vs. Dodgers',['FOX+','FOX One']],
  ['18:20','fa-solid fa-football','NFL','Lions vs. Panthers',['ESPN','DAZN']],
  ['19:00','fa-solid fa-futbol','Partido amistoso','Guadalajara vs. América',['FOX','FOX One','Prime Video']],
  ['19:06','fa-solid fa-futbol','Liga MX Femenil','Pachuca Femenil vs. Toluca Femenil',['FOX en Tubi','FOX One']],
];


/* ==========================================================================
   LÓGICA DEL SITIO (compartida por todas las páginas)
   Cada función render*() revisa si su contenedor existe en la página actual;
   si no existe, simplemente no hace nada. Así un solo app.js sirve a las 4 páginas.
   ========================================================================== */

/* ---------- 1. Utilidades ---------- */
const $ = (sel) => document.querySelector(sel);

// Quita acentos y pasa a minúsculas: "Fútbol" -> "futbol". Así "futbol" y "FÚTBOL" coinciden.
const norm = (s) => String(s).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

const FALLBACK = 'data:image/svg+xml,' + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="640" height="360"><rect width="100%" height="100%" fill="#6cc7b9"/><circle cx="320" cy="180" r="70" fill="none" stroke="#fff" stroke-width="6"/></svg>');
const FALLBACK_CIRCUITO = 'data:image/svg+xml,' + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="480" height="360"><rect width="100%" height="100%" fill="#d8f3ef"/><text x="240" y="190" text-anchor="middle" font-family="sans-serif" font-size="22" fill="#1d4a48">Imagen del circuito</text></svg>');

/* ---------- 2. Estado del filtro (se guarda para que viaje entre páginas) ---------- */
let filtro = { dep: 'todos', q: '' };
try { filtro = Object.assign(filtro, JSON.parse(sessionStorage.getItem('sp-filtro') || '{}')); } catch (e) { /* sin storage: se usa el valor por defecto */ }
if (!DEPORTES[filtro.dep]) filtro.dep = 'todos';
const guardarFiltro = () => { try { sessionStorage.setItem('sp-filtro', JSON.stringify(filtro)); } catch (e) {} };

/* ---------- 3. EL BUSCADOR POR DEPORTE (la corrección principal) ----------
   Si lo que escribes es exactamente el nombre/sinónimo de un deporte, se filtra por ese deporte
   en TODAS las secciones. Si no, se busca el texto dentro de cada elemento (equipos, títulos, ligas...). */
const SINONIMOS = {
  futbol:'futbol', soccer:'futbol', 'liga mx':'futbol', champions:'futbol', 'champions league':'futbol', 'liga de naciones':'futbol',
  basquetbol:'basquetbol', basquet:'basquetbol', baloncesto:'basquetbol', basketball:'basquetbol', nba:'basquetbol', acb:'basquetbol', 'liga acb':'basquetbol',
  tenis:'tenis', tennis:'tenis', atp:'tenis',
  automovilismo:'auto', auto:'auto', autos:'auto', carreras:'auto', formula1:'auto', 'formula 1':'auto', f1:'auto', nascar:'auto',
  nfl:'nfl', 'futbol americano':'nfl', 'futbol-americano':'nfl', football:'nfl',
  todos:'todos', todo:'todos',
};
const depDeBusqueda = () => SINONIMOS[norm(filtro.q).trim()] || null;   // ¿lo escrito es un deporte?
const depActivo     = () => depDeBusqueda() || filtro.dep;              // la búsqueda manda sobre los botones

// ¿Este elemento debe mostrarse? dep = su deporte; campos = textos donde se busca.
function coincide(dep, ...campos) {
  const d = depActivo();
  if (d !== 'todos' && dep !== d) return false;       // 1) filtro por deporte
  if (depDeBusqueda()) return true;                   //    (la búsqueda ya era un deporte)
  const q = norm(filtro.q).trim();
  if (!q) return true;                                // 2) sin texto: se muestra todo
  const pajar = norm((DEPORTES[dep] || 'otros deportes') + ' ' + campos.join(' '));
  return q.split(/\s+/).every((palabra) => pajar.includes(palabra));  // 3) todas las palabras deben aparecer
}

/* ---------- 4. Piezas reutilizables ---------- */
const vacio = (msg = 'No encontramos resultados con ese filtro.') =>
  `<div class="col-12"><div class="sp-vacio text-center p-4"><i class="bi bi-search fs-2" aria-hidden="true"></i><p class="mb-2 mt-2">${msg}</p><button type="button" class="btn btn-outline-primary btn-sm" data-limpiar><i class="bi bi-x-circle me-1" aria-hidden="true"></i>Quitar filtros</button></div></div>`;

const reveal = (i) => `reveal" style="--d:${i % 4}`;   // clase de animación de aparición (con retraso escalonado)

function tarjetaNoticia(n, i) {
  return `<div class="col-12 col-md-6 col-lg-4 ${reveal(i)}">
    <article class="sp-card card-news h-100 d-flex flex-column overflow-hidden">
      <div class="card-news-media"><img src="${n.img || IMG[n.dep] || FALLBACK}" alt="Imagen de la noticia: ${n.titulo}" width="1280" height="720" loading="lazy" onerror="this.onerror=null;this.src=IMG['${n.dep}']||FALLBACK"></div>
      <div class="p-3 d-flex flex-column flex-grow-1">
        <div class="mb-2"><span class="badge badge-dep"><i class="${ICONO[n.dep]} me-1" aria-hidden="true"></i>${DEPORTES[n.dep]}</span> <span class="badge text-bg-secondary">${n.cat}</span></div>
        <h3 class="h5 card-title">${n.titulo}</h3>
        <time class="small text-body-secondary mb-3"><i class="bi bi-clock me-1" aria-hidden="true"></i>${n.fecha}</time>
        <button class="btn btn-primary btn-sm mt-auto align-self-start" type="button" data-noticia="${n.id}">Leer más <i class="bi bi-arrow-right" aria-hidden="true"></i></button>
      </div>
    </article>
  </div>`;
}

/* ---------- 5. Render de cada sección ---------- */
function renderFiltros() {
  const cont = $('#filtroDeportes'); if (!cont) return;
  const activo = depActivo();
  cont.innerHTML = Object.entries(DEPORTES).map(([k, v]) =>
    `<button type="button" class="bulma-button ${k === activo ? 'is-active-sport' : ''}" data-dep="${k}" aria-pressed="${k === activo}"><span class="bulma-icon"><i class="${ICONO[k]}" aria-hidden="true"></i></span><span>${v}</span></button>`).join('');
  const estado = $('#estadoFiltro');
  if (estado) {
    const partes = [];
    if (activo !== 'todos') partes.push('deporte: ' + DEPORTES[activo]);
    if (filtro.q.trim() && !depDeBusqueda()) partes.push('búsqueda: “' + filtro.q.trim() + '”');
    estado.textContent = partes.length ? 'Mostrando ' + partes.join(' · ') : 'Mostrando todos los deportes';
  }
}

function renderVivo() {
  const cont = $('#gridVivo'); if (!cont) return;
  const lista = PARTIDOS.filter(p => coincide(p.dep, p.liga, p.local, p.visita, p.fecha, p.estado));
  cont.innerHTML = lista.length ? lista.map((p, i) => `
    <div class="col-12 col-md-6 col-lg-3 ${reveal(i)}">
      <button class="sp-card w-100 p-3 text-start" type="button" data-partido="${p.id}" aria-label="Ver detalle de ${p.local} contra ${p.visita}">
        <span class="badge ${p.estado === 'EN VIVO' ? 'badge-live' : 'text-bg-secondary'}">${p.estado}</span>
        <span class="small ms-1"><i class="${ICONO[p.dep]} me-1" aria-hidden="true"></i>${p.liga} · ${p.fecha}</span>
        <div class="d-flex justify-content-between mt-2"><span>${p.local}</span><span class="sp-score">${p.gl}</span></div>
        <div class="d-flex justify-content-between"><span>${p.visita}</span><span class="sp-score">${p.gv}</span></div>
      </button>
    </div>`).join('') : vacio();
  const hora = $('#horaActualizacion');
  if (hora) hora.textContent = 'Datos verificados al ' + FECHA_DATOS + '. T.E. = tiempo extra. No hay marcadores en vivo de estas competencias en este momento.';
}

function renderGoles() {
  const cont = $('#gridGoles'); if (!cont) return;
  const lista = GOLES.filter(g => coincide('futbol', g.jugador, g.partido, g.semana, 'gol'));
  $('#goles').hidden = !lista.length;        // si no hay goles que mostrar (p. ej. filtro Tenis), se oculta toda la sección
  cont.innerHTML = lista.map((g, i) => `
    <div class="col-12 col-sm-6 col-lg-3 ${reveal(i)}">
      <article class="sp-card overflow-hidden h-100">
        <div class="ratio ratio-16x9">
          <button type="button" class="gol-video" data-video="${g.video}" data-titulo="Gol de la semana: ${g.jugador}" aria-label="Reproducir gol de ${g.jugador}">
            <img src="https://i.ytimg.com/vi/${g.video}/hqdefault.jpg" width="480" height="360" loading="lazy" alt="">
            <span class="gol-play" aria-hidden="true"><i class="fa-solid fa-play"></i></span>
          </button>
        </div>
        <div class="p-3">
          <span class="badge text-bg-secondary mb-2">${g.semana}</span>
          <h3 class="h6 fw-bold mb-1">${g.jugador}</h3>
          <p class="small text-body-secondary mb-0">${g.partido}</p>
        </div>
      </article>
    </div>`).join('');
}

function renderDestacadas() {            // 3 noticias en la página de Inicio
  const cont = $('#gridDestacadas'); if (!cont) return;
  const lista = NOTICIAS.filter(n => coincide(n.dep, n.cat, n.titulo, n.texto, n.fecha)).slice(0, 3);
  cont.innerHTML = lista.length ? lista.map(tarjetaNoticia).join('') : vacio();
}

let carrusel = null;                     // instancia de Bootstrap, para destruirla al re-renderizar
function renderNoticias() {
  const zona = $('#zonaCarrusel'); if (!zona) return;
  const lista = NOTICIAS.filter(n => coincide(n.dep, n.cat, n.titulo, n.texto, n.fecha));
  const grid = $('#gridNoticias');
  if (carrusel) { carrusel.dispose(); carrusel = null; }
  if (grid) grid.innerHTML = lista.length ? lista.map(tarjetaNoticia).join('') : vacio();
  if (!lista.length) { zona.innerHTML = ''; return; }
  const dest = lista.slice(0, 6);        // el carrusel muestra máximo 6 destacadas
  zona.innerHTML = `
    <div id="carNoticias" class="carousel slide sp-card overflow-hidden" aria-roledescription="carrusel" aria-label="Noticias destacadas">
      <div class="carousel-indicators">${dest.map((n, i) => `<button type="button" data-bs-target="#carNoticias" data-bs-slide-to="${i}" class="${i ? '' : 'active'}" aria-label="Noticia ${i + 1}"></button>`).join('')}</div>
      <div class="carousel-inner">${dest.map((n, i) => `
        <div class="carousel-item ${i ? '' : 'active'}">
          <img class="d-block w-100 car-img" ${i ? 'loading="lazy"' : 'fetchpriority="high"'} width="1280" height="720" src="${n.img || IMG[n.dep] || FALLBACK}" alt="Imagen de la noticia: ${n.titulo}" onerror="this.onerror=null;this.src=IMG['${n.dep}']||FALLBACK">
          <div class="car-caption">
            <span class="bulma-tag bulma-is-warning"><i class="bi bi-tag-fill me-1" aria-hidden="true"></i>${n.cat}</span>
            <h3 class="sp-h2 mt-2">${n.titulo}</h3>
            <time class="small">${n.fecha}</time><br>
            <button class="btn btn-light btn-sm mt-2" type="button" data-noticia="${n.id}">Leer más</button>
          </div>
        </div>`).join('')}</div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carNoticias" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Anterior</span></button>
      <button class="carousel-control-next" type="button" data-bs-target="#carNoticias" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Siguiente</span></button>
    </div>`;
  carrusel = new bootstrap.Carousel('#carNoticias', { interval: 4500, ride: 'carousel', pause: 'hover' });
}

const tablaTorneo = (t) => `
  <div class="table-responsive"><table class="table table-sm align-middle mb-0">
    <thead><tr>${t.cols.map(c => `<th scope="col">${c}</th>`).join('')}</tr></thead>
    <tbody>${t.filas.map(f => `<tr>${f.map(x => `<td>${x}</td>`).join('')}</tr>`).join('')}</tbody>
  </table></div>`;

function renderTorneos() {
  const cont = $('#accTorneos'); if (!cont) return;
  const lista = TORNEOS.filter(t => coincide(t.dep, t.nombre, t.filas.flat().join(' '), t.resultados.join(' ')));
  cont.innerHTML = lista.length ? lista.map((t, i) => `
    <div class="accordion-item ${reveal(i)}">
      <h3 class="accordion-header">
        <button class="accordion-button ${i ? 'collapsed' : ''}" type="button" data-bs-toggle="collapse" data-bs-target="#t${i}" aria-expanded="${!i}" aria-controls="t${i}"><i class="${ICONO[t.dep]} me-2" aria-hidden="true"></i>${t.nombre}</button>
      </h3>
      <div id="t${i}" class="accordion-collapse collapse ${i ? '' : 'show'}" data-bs-parent="#accTorneos">
        <div class="accordion-body p-0">
          ${t.imagen ? `<div class="row g-0">
            <div class="col-lg-8 order-2 order-lg-1">${tablaTorneo(t)}</div>
            <aside class="col-lg-4 order-1 order-lg-2 p-3 text-center sp-circuito">
              <img class="img-fluid rounded" src="${t.imagen}" alt="${t.imagenAlt}" loading="lazy" onerror="this.onerror=null;this.src=FALLBACK_CIRCUITO">
              <p class="small text-body-secondary mt-2 mb-0">${t.imagenPie}</p>
            </aside>
          </div>` : tablaTorneo(t)}
          <p class="px-3 pt-3 mb-1 fw-semibold">${t.tituloLista || 'Últimos resultados'}</p>
          <ul class="px-4 pb-3 mb-0">${t.resultados.map(r => `<li>${r}</li>`).join('')}</ul>
        </div>
      </div>
    </div>`).join('') : vacio();
}

function renderLesiones() {
  const ul = $('#listaLesiones');
  if (ul) ul.innerHTML = '<li class="list-group-item"><i class="bi bi-info-circle-fill me-2" aria-hidden="true"></i>Aún no hay un parte médico verificado. Esta sección se llenará cuando se conecte una fuente confiable de lesiones.</li>';
  const uh = $('#ultimaHora');
  if (uh) uh.innerHTML = '<strong>Última hora:</strong> la Liga MX hace pausa por Fecha FIFA y reanuda el viernes 9 de octubre con la Jornada 11.';
}

function renderCalendario() {
  const ol = $('#listaCal'); if (!ol) return;
  const lista = CALENDARIO.filter(c => coincide(c.dep, c.partido, c.fecha));
  ol.innerHTML = lista.length ? lista.map((c, i) => `
    <li class="list-group-item d-flex flex-column flex-md-row justify-content-between gap-1 gap-md-3 bg-transparent item-hover ${reveal(i)}"><span><i class="${ICONO[c.dep]} me-2" aria-hidden="true"></i>${c.partido}</span><time class="text-nowrap fw-semibold">${c.fecha}${c.hora ? ' · ' + c.hora + ' (CDMX)' : ''}</time></li>`).join('')
    : `<li class="list-group-item bg-transparent"><div class="row">${vacio()}</div></li>`;
}

const depAgenda = (liga) => /MLB/i.test(liga) ? 'otros' : /F[óo]rmula|NASCAR/i.test(liga) ? 'auto' : /NFL/i.test(liga) ? 'nfl' : 'futbol';
function renderAgenda() {
  const ol = $('#listaAgenda'); if (!ol) return;
  $('#agendaFecha').textContent = AGENDA_FECHA + ' · horarios del centro de México (CDMX)';
  const lista = AGENDA.filter(a => coincide(depAgenda(a[2]), a[2], a[3], a[4].join(' ')));
  ol.innerHTML = lista.length ? lista.map((a, i) => `
    <li class="list-group-item bg-transparent d-flex flex-wrap align-items-center gap-3 item-hover ${reveal(i)}">
      <time class="fw-bold fs-5 agenda-hora">${a[0]}</time>
      <i class="${a[1]}" aria-hidden="true"></i>
      <span class="flex-grow-1"><span class="small text-body-secondary d-block">${a[2]}</span><span class="fw-bold">${a[3]}</span></span>
      <span class="d-flex flex-wrap gap-1">${a[4].map(c => `<span class="badge text-bg-secondary">${c}</span>`).join('')}</span>
    </li>`).join('') : `<li class="list-group-item bg-transparent"><div class="row">${vacio()}</div></li>`;
}

/* ---------- 6. Animación de aparición (IntersectionObserver) ----------
   Los elementos con clase .reveal empiezan transparentes y se muestran al entrar en pantalla. */
const observador = ('IntersectionObserver' in window)
  ? new IntersectionObserver((entradas) => entradas.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); observador.unobserve(en.target); } }), { threshold: .12 })
  : null;
function activarReveal() {
  document.querySelectorAll('.reveal:not(.in)').forEach(el => observador ? observador.observe(el) : el.classList.add('in'));
}

/* ---------- 7. Render general: se llama cada vez que cambia el filtro o la búsqueda ---------- */
function renderTodo() {
  renderFiltros(); renderVivo(); renderGoles(); renderDestacadas(); renderNoticias();
  renderTorneos(); renderCalendario(); renderAgenda();
  activarReveal();
}

/* ---------- 8. Modal, eventos y tema ---------- */
const modal = new bootstrap.Modal('#modalDetalle');
function abrirModal(titulo, html) {
  $('#modalTitulo').textContent = titulo;
  $('#modalCuerpo').innerHTML = html;
  modal.show();
}

document.addEventListener('click', (e) => {
  const limpiar = e.target.closest('[data-limpiar]');
  if (limpiar) { filtro = { dep: 'todos', q: '' }; guardarFiltro(); $('#buscador').value = ''; renderTodo(); return; }
  const dep = e.target.closest('[data-dep]');
  if (dep) {                                            // clic en un botón de deporte
    filtro.dep = dep.dataset.dep;
    if (depDeBusqueda()) { filtro.q = ''; $('#buscador').value = ''; }   // si la búsqueda era un deporte, se limpia para no contradecir el botón
    guardarFiltro(); renderTodo(); return;
  }
  const noticia = e.target.closest('[data-noticia]');
  if (noticia) { const n = NOTICIAS.find(x => x.id == noticia.dataset.noticia); abrirModal(n.titulo, `<p class="small text-body-secondary">${DEPORTES[n.dep]} · ${n.cat} · ${n.fecha}</p><p>${n.texto}</p>`); return; }
  const par = e.target.closest('[data-partido]');
  if (par) { const p = PARTIDOS.find(x => x.id == par.dataset.partido); abrirModal(`${p.local} vs. ${p.visita}`, `<p>${p.liga} · ${p.fecha}</p><p class="sp-score">${p.gl} - ${p.gv}</p><p>Estado: ${p.estado}</p>`); return; }
  const vid = e.target.closest('[data-video]');
  if (vid) vid.outerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${vid.dataset.video}?autoplay=1" title="${vid.dataset.titulo}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>`;
});

$('#buscador').value = filtro.q;                          // al cambiar de página se conserva lo escrito
$('#buscador').addEventListener('input', (e) => { filtro.q = e.target.value; guardarFiltro(); renderTodo(); });
$('#formBusqueda').addEventListener('submit', (e) => e.preventDefault());

function pintarTema() {
  const oscuro = document.documentElement.dataset.bsTheme === 'dark';
  $('#btnTema').innerHTML = `<i class="bi ${oscuro ? 'bi-sun-fill' : 'bi-moon-stars-fill'}" aria-hidden="true"></i>`;
}
$('#btnTema').addEventListener('click', () => {
  const html = document.documentElement;
  html.dataset.bsTheme = html.dataset.bsTheme === 'dark' ? 'light' : 'dark';
  try { localStorage.setItem('tema', html.dataset.bsTheme); } catch (e) {}
  pintarTema();
});

/* ---------- 9. Arranque ---------- */
pintarTema();
renderLesiones();
renderTodo();
