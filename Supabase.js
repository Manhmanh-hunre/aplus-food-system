// 1. URL chính xác cho API Client (Đã bỏ "db.")
const SUPABASE_URL = "https://fkrruztpsnjawbhurphx.supabase.co"; 

// 2. Publishable Key đầy đủ của bạn
const SUPABASE_ANON_KEY = "sb_publishable_gIJL1zLHjN0eZMI7GVM7jg_1zwuFDTi."; 

// 3. Khởi tạo đối tượng kết nối dùng chung
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);