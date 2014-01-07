/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 13-7-26
 * Time: 下午11:13
 * To change this template use File | Settings | File Templates.
 */



var net=require("net");
var t=0;
var ddbef = new Date();
var MAXREQ;
var SERV_IP;

process.argv.forEach(function(val, index, array) {
    //console.log('initial argv: '+index + ': ' + val);
    if(index==2)
        (MAXREQ=parseInt(val)) // MAX REQUESTS 
});


function aaa(t)
{
var client = net.connect(
    {port: 20002,host:'10.10.111.61'},
    function() {
        t=1;
       client.setEncoding('utf8');
       client.write('1320000991'+'\0');
        client.on('data', function(data) {
           //console.log(data.toString()+t);
           client.write('1320000992'+'\0');
            t=t+1;
            if(t>MAXREQ) {
                var ddaft = new Date();
                console.log('\n'+'PROCESSPID  :  '+process.pid) ;
                console.log('START TIME  :  '+ddaft+'\n'+'STOP  TIME  :  '+ddbef) ;
                console.log('EXPR  TIME  :  '+(ddaft.getTime()-ddbef.getTime())+'ms') ;
                var qps=t/(ddaft.getTime()-ddbef.getTime());
                var rst=(ddaft.getTime()-ddbef.getTime())/t;;
                console.log('QPS         :  '+qps.toFixed(3)*1000) ;
                console.log('RST         :  '+rst.toFixed(3)+'ms') ;
                process.exit(0);};
        });
    });


client.on('end', function() {
    client.destroy();
});

client.on('error', function(e) {
    console.log('can\'t connect to the server:'+e);
});
}


aaa();
     /*
    setInterval(function() {
        for(i=0;i<100;i++)
        {
            aaa(i);
        }

    }, 500);
      */
