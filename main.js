import { createClient } from 'https://esm.sh/@supabase/supabase-js'

// 🔧 Ganti dengan data project kamu:
const supabaseUrl = 'https://eoqrwgerdtsbnbosfvua.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVvcXJ3Z2VyZHRzYm5ib3NmdnVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk3MTEyNTEsImV4cCI6MjA3NTI4NzI1MX0.VAXf_yr2-Hopjal7FqjL0ps09pLQjvSw64GHzkPLIxo'
const supabase = createClient(supabaseUrl, supabaseKey)

async function register() {
  const email = document.getElementById('reg-email').value
  const password = document.getElementById('reg-password').value

  const { data, error } = await supabase.auth.signUp({ email, password })
  document.getElementById('message').innerText = error ? error.message : '✅ Akun berhasil dibuat! Silakan login.'
}

async function login() {
  const email = document.getElementById('login-email').value
  const password = document.getElementById('login-password').value

  const { data, error } = await supabase.auth.signInWithPassword({ email, password })
  if (error) {
    document.getElementById('message').innerText = error.message
  } else {
    document.getElementById('message').innerText = '✅ Login berhasil! Pindah ke halaman produk...'
    setTimeout(() => window.location.href = 'products.html', 1500)
  }
}
