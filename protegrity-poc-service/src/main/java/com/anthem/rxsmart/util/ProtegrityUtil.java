package com.anthem.rxsmart.util;
import com.anthem.rxsmart.model.ProtegrityData;
import com.protegrity.ap.java.*;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class ProtegrityUtil {
	@Value("${protegrity.user}")
	private String protegrityUser;

	@Value("${protegrity.dataelement}")
	private String protegrityDataElement;
	public String getProtegrityVersion() {
		Protector protector=null;
		try {
		protector= Protector.getProtector();
		return "Product version : "+protector.getVersion();
		} catch (ProtectorException e) {
		 e.printStackTrace();
		 return "Product version : "+e.getMessage();
		}
	}
	
	public Object getProtectedData(ProtegrityData protegrityData) {
		String[] inputStringArray			= new String[1];
		String[] ProtectStringArray			= new String[1];
		inputStringArray[0] = (String) protegrityData.getProtegrityData();
		Protector api = Protector.getProtector();
		SessionObject session = api.createSession( protegrityUser );
//		api.protect( session, protegrityDataElement, inputStringArray, protectByteArray );
		if(!api.protect(session, protegrityDataElement, inputStringArray, ProtectStringArray)) {
			System.out.println("protect api failed !!! \nError : "+api.getLastError(session));
			return "protect api failed !!! \nError : "+api.getLastError(session);
		} 
		return ProtectStringArray;
	}
	
	public Object getUnProtectedData(ProtegrityData protegrityData) {
		String[] ProtectStringArray			= new String[1];
		String[] UnProtectStringArray		= new String[1];
		ProtectStringArray[0] = (String) protegrityData.getProtegrityData();
		Protector api = Protector.getProtector();
		SessionObject session = api.createSession( protegrityUser );
		if(!api.unprotect(session, protegrityDataElement, ProtectStringArray, UnProtectStringArray)) {
			System.out.println("unprotect api failed !!! \nError : "+api.getLastError(session));
			return "unprotect api failed !!! \nError : "+api.getLastError(session);
		}
		
		return UnProtectStringArray;
	}
	
	
}
