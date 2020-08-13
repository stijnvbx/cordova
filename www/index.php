<?php

    $dbhost = "db.sinners.be";
    $dbuser = "r0740656";
    $dbpass = "nRBsQ4ruBvX9";
    $dbname = "r0740656_Cordova_Database";

    if(!$conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname)) {
        die("could not connect");
    }
    //else {
    //    echo "dbhost: " . $dbhost . "<br/>";
    //    echo "dbuser: " . $dbuser . "<br/>";
    //    echo "dbpass: " . $dbpass . "<br/>";
    //    echo "dbname: " . $dbname . "<br/>";
    //    echo "conn: " . "<br/>";
    //}

    //echo "conn: " . "<br/>";
    $data = array();
    if (!$q=mysqli_query($conn, "select naam from about where ID=1")) {
        printf("Error message: %s\n", mysqli_error($conn));
    }
    //else {
    //    echo "q->field_count:  $q->field_count <br/>";
    //}
    while ($row=mysqli_fetch_object($q)){
        //echo "row->naam: $row->naam <br/>";
        $data[]=$row->naam;
    }
    echo json_encode($data);
?>