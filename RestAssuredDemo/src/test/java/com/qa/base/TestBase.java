package com.qa.base;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.logging.Logger;

import com.qa.stepdefinitions.GetExchangeRatesTest;

public class TestBase {
	private final static Logger logger = Logger.getLogger(GetExchangeRatesTest.class.getName());
	public Properties prop;
	
	public TestBase() {

		try {
			prop = new Properties();
			FileInputStream io;
			io = new FileInputStream("src//test//java//com//qa//configuration//config.properties");
			prop.load(io);
			logger.info("Configuration file  is initiated...");
		} catch (FileNotFoundException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}
	
}
