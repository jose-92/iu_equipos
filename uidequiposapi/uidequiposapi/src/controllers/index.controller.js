const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'Uri14!',
    database: 'iud_equipos',
    port: '5432'
});


const getTipos = async (req, res) => {
    const respons = await pool.query('SELECT * FROM tipo_equipo')
    res.json(respons.rows)
}

const getTipo = async (req, res) => {
    const respons = await pool.query(
        'SELECT * FROM tipo_equipo WHERE id_tipo = $1',
        [req.params.id])
    res.json(respons.rows)
}


const saveTipos = async (req, res) => {
    const {estado, nombre} = req.body;
    const respons = await pool.query(
        'INSERT INTO tipo_equipo (estado, fecha_creacion, fecha_actualizacion, nombre)' + 
        'VALUES ($1, $2, $3, $4)', [estado, new Date(), new Date(), nombre])
    res.send('Tipo Creado')
}

const updateTipos = async (req, res) => {
    const {estado, nombre} = req.body;
    const respons = await pool.query(
        'UPDATE tipo_equipo SET estado = $1, nombre = $2, fecha_actualizacion = $3' + 
        'WHERE id_tipo = $4'
        , [estado, nombre, new Date(), req.params.id])
    res.send('Tipo actualizado ')
}


const getEstados = async (req, res) => {
    const respons = await pool.query('SELECT * FROM estado_equipo')
    res.json(respons.rows)
}

const getEstado = async (req, res) => {
    const respons = await pool.query(
        'SELECT * FROM estado_equipo WHERE id_tipo = $1',
        [req.params.id])
    res.json(respons.rows)
}


const saveEstados = async (req, res) => {
    const {estado, nombre} = req.body;
    const respons = await pool.query(
        'INSERT INTO estado_equipo (estado, fecha_creacion, fecha_update, nombre)' + 
        'VALUES ($1, $2, $3, $4)', [estado, new Date(), new Date(), nombre])
    res.send('Estado Creado')
}

const updateEstados = async (req, res) => {
    const {estado, nombre} = req.body;
    const respons = await pool.query(
        'UPDATE estado_equipo SET estado = $1, nombre = $2, fecha_update = $3' + 
        'WHERE id_estado = $4'
        , [estado, nombre, new Date(), req.params.id])
    res.send('Tipo actualizado ')
}

const getUsers = async (req, res) => {
    const respons = await pool.query('SELECT * FROM usuario');
   res.json(respons.rows);
}

const getUserById = async (req, res) => {
    const p = req.params.id;
    const r = await pool.query("SELECT * FROM usuario WHERE id_usuario = $1",
    [p])
    res.json(r.rows)
}

const saveUsers = async (req, res) => {
    const {id, nombre, estado, fecha_creacion, fecha_update} = req.body;
    const respone = await pool.query(
        'INSERT INTO usuario (id_usuario, nombre, estado, fecha_cracion,' + 
        'fecha_update) VALUES ($1, $2, $3, $4, $5)',
        [id, nombre, estado, new Date(), new Date()]);
    console.log(respone);
    respone.send("Usuario creado");
}

const getItems = async (req, res) => {
    const respons = await pool.query('SELECT * FROM inventario')
    res.json(respons.rows)
}



module.exports = {
    getTipo,
    getTipos,
    saveTipos,
    updateTipos,
    getUsers,
    saveUsers,
    getItems,
    getUserById,
    getEstado,
    getEstados,
    saveEstados,
    updateEstados
}