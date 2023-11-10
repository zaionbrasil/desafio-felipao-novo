function somarSubtrair(vencer){

 
    if (vencer < 10){
        return 'O saldo de vitórias do héroi diz que ele está no nível de Ferro'
    }else if ((vencer > 11) && (vencer <= 20)){
        return 'O saldo de vitórias do héroi diz que ele está no nível de Bronze'
    }else if ((vencer > 21) && (vencer <= 50)){
        return 'O saldo de vitórias do héroi diz que ele está no nível de Prata'
    }else if((vencer > 51) && (vencer <= 80)){
        return 'O saldo de vitórias do héroi diz que ele está no nível de Ouro'
    }else if ((vencer > 81) && (vencer<= 90)){
        return 'O saldo de vitórias do héroi diz que ele está no nível de Diamante'
    }else if ((vencer > 91) && (vencer <= 100)){
        return 'O saldo de vitórias do héroi diz que ele está no nível de Lendário'
    }else if (vencer >= 101 ){
        return 'O saldo de vitórias do héroi diz que ele está no nível de Imortal'
    }
        
    }
    
    console.log(somarSubtrair(98))