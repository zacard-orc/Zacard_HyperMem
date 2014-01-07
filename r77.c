#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <sys/ipc.h>
#include <sys/shm.h>
#include <sys/types.h>
#include <string.h>
#include <fcntl.h>
#include <ctype.h>
#include "bizhash.h"

#define HashTbSize 0x156AF9   //0x156AF9==1,400,000条数据

unsigned long crytable[0x500];
HashTb *WR_HPP;


int main()
{

	
  //生成KEY值密码树1280[0x500]个
	prepareCryptTable();
	//展示KEY值密码树1280[0x500]个
  //ShowCryptTable();
	

	//创建内存库
	CrtMemHashTable("/root/tt",0x07,"/root/tt/10K.log",0x1F400000);   

	return 0;
}

