package com.schoolbell_e.plugins.mlkit_language;

import android.util.Log;

import com.google.android.gms.tasks.OnFailureListener;
import com.google.android.gms.tasks.OnSuccessListener;
import com.google.mlkit.nl.languageid.LanguageIdentification;
import com.google.mlkit.nl.languageid.LanguageIdentifier;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

public class MLKitLanguage {

    public String echo(String value) {
        Log.i("Echo", value);
        return value;
    }

    private Boolean isTextValid(String text) {
        if (text.length() == 0) {
            return false;
        }
        return true;
    }

    interface Callback {
        void resolve(String text);
        void reject(String error);
    }


    public void identifyLanguage(String text, Callback callback) {

        if (!isTextValid(text)) {
            callback.reject("empty string");
            return;
        }

        LanguageIdentifier languageIdentifier =
                LanguageIdentification.getClient();
        languageIdentifier.identifyLanguage(text)
                .addOnSuccessListener(
                        new OnSuccessListener<String>() {
                            @Override
                            public void onSuccess(@Nullable String languageCode) {
                                if (languageCode.equals("und")) {
                                    callback.reject("Can't identify language.");
                                } else {
                                    callback.resolve(languageCode);
                                }
                            }
                        })
                .addOnFailureListener(
                        new OnFailureListener() {
                            @Override
                            public void onFailure(@NonNull Exception e) {
                                // Model couldn’t be loaded or other internal error.
                                callback.reject(e.getMessage());
                            }
                        });

    }

}
