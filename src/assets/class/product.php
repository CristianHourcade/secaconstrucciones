<?php
class Producto{
    public function AltaSql($sql){
        $con = new Connect();
        $con -> CreateConnection();
        $con -> Execute($sql);
        $con -> CloseConnection();
    }
} 





























?>