// Çevrem.net Rol Yetkilendirme Middleware - roleMiddleware.js
// Belirli işlemleri sadece belirli rollerin yapabilmesi için yetkilendirme.

const roleMiddleware = (roles) => {
  return (req, res, next) => {
    console.log('Yetkilendirme kontrolü yapılıyor...');
    if (!req.user || !roles.includes(req.user.role)) {
      console.warn('Yetkisiz işlem denemesi.');
      return res.status(403).json({ message: 'Bu işlemi yapma yetkiniz yok' });
    }
    console.log('Yetkilendirme başarılı.');
    next();
  };
};

module.exports = roleMiddleware;