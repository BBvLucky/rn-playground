package com.nativestoragetest

import android.content.Context
import android.content.SharedPreferences
import com.facebook.react.bridge.ReactApplicationContext
import androidx.core.content.edit

class NativeStorageTestModule(reactContext: ReactApplicationContext) : NativeStorageTestSpec(reactContext) {

  private val prefs: SharedPreferences by lazy {
    reactApplicationContext.getSharedPreferences(
      "my_prefs",
      Context.MODE_PRIVATE
    )
  }

  override fun set(value: String, key: String) {
    prefs.edit { putString(key, value) }
  }

  override fun get(key: String?): String?{
    return prefs.getString(key, null)
  }

  override fun remove(key: String?) {
    prefs.edit { remove(key) }
  }

  override fun clear() {
    prefs.edit { clear() }
  }
}