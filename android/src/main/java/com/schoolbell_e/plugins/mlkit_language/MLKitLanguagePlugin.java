package com.schoolbell_e.plugins.mlkit_language;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "MLKitLanguage")
public class MLKitLanguagePlugin extends Plugin {

    private MLKitLanguage implementation = new MLKitLanguage();

    @PluginMethod()
    public void identifyLanguage(PluginCall call) {
        String value = call.getString("text");
        implementation.identifyLanguage(value, new MLKitLanguage.Callback() {
            @Override
            public void resolve(String lang) {
                JSObject ret = new JSObject();
                ret.put("languageCode", lang);
                call.resolve(ret);
            }

            @Override
            public void reject(String errorMessage) {
                call.reject(errorMessage);
            }
        });
    }
}
