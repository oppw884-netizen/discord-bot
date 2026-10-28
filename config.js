// ===== แก้ไขค่าต่าง ๆ ตรงนี้ =====
module.exports = {
  // ไอดีกลุ่ม Roblox (RCA)
  robloxGroupId: 0,

  // ลิงก์เข้าเกม (ปุ่ม "เข้าเกม")
  gameUrl: 'https://www.roblox.com/games/90889561383341/Be-a-Friends',

  // ห้องที่ผู้ตรวจสอบจะเห็นคำขอ
  reviewChannelId: '1562615827633541120',

  // role ของผู้ตรวจสอบที่กดอนุมัติได้
  reviewerRoleIds: ['1562056481338294313'],

  // แปลงรูปแบบชื่อเล่นที่จะตั้งให้
  // ตัวแปร: {prefix} {username}
  nicknameFormat: '[{prefix}] {username}',

  // ยศในกลุ่ม Roblox -> role ใน Discord
  // key = เลขยศ (rank number 0-255) ในกลุ่ม
  ranks: {
    1: { prefix: 'พลทหาร', roleId: '000000000000000000' },
    2: { prefix: 'พลฯ', roleId: '000000000000000000' },
    // เพิ่มได้เรื่อย ๆ
  },

  color: 0xc9a227,
};
