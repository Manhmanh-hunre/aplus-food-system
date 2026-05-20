// 1. URL chính xác cho API Client
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://fkrruztpsnjawbhurphx.supabase.co";

// 2. Publishable Key đầy đủ của bạn
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "sb_publishable_gIJL1zLHjN0eZMI7GVM7jg_1zwuFDTi.";

// 3. Khởi tạo đối tượng kết nối dùng chung
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
