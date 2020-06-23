let db = require('../models/dbconexion');

let articulo = {
  listar( req, res ){
    let sql = "SELECT * FROM articulo";
    db.query(sql,function(err, result){
      if( err ){
        console.log(err);
        res.sendStatus(500);
      }else{
        res.json(result);
      }
    });
  },
  store( req, res ){
    val_nombre = req.body.nombre;
    val_precio = req.body.precio;
    val_tipo = req.body.tipo;
    val_descripcion = req.body.descripcion;
    val_destribuidora = req.body.distribuidora
    let sql = "INSERT INTO articulo(nombre,precio,tipo,descripcion,distribuidora) VALUES(?,?,?,?,?)";
    db.query(sql,[val_nombre,val_precio,val_tipo,val_descripcion,val_destribuidora],function(err, newData){
      if(err){
        console.log(err);
        res.sendStatus(500);
      }else{
        res.json('ok');
      }
    });
  },
  show( req, res ){
    val_id = req.params.id;
    let sql = "SELECT * FROM articulo WHERE id=?";
    db.query(sql,[val_id],function(err, data){
      if(err){
        console.log(err);
        res.sendStatus(500);
      }else{
        res.json(data[0]);
      }
    });
  },
  edit( req, res ){
    val_id = req.body.id;//_id important
    val_nombre = req.body.nombre;//codigo
    val_precio = req.body.precio;
    val_tipo = req.body.tipo;
    val_descripcion = req.body.descripcion;
    val_destribuidora = req.body.distribuidora
    let sql = "UPDATE articulo SET nombre=?, precio=?, tipo=?,descripcion=?, distribuidora=? WHERE id=?";
    db.query(sql,[val_nombre,val_precio,val_tipo,val_descripcion,val_destribuidora,val_id],function(err, newData){
      if(err){
        res.sendStatus(500);
      }else{
        res.json('ok');
        console.log(val_id);
      }
    });
  },
  delete( req, res ){
    val_id = req.params.id;
    let sql = "DELETE FROM articulo WHERE id=?";
    db.query(sql,[val_id],function(err, newData){
      if(err){
        res.sendStatus(500);
      }else{
        res.json('ok');
      }
    });
  }
}

module.exports = articulo;
