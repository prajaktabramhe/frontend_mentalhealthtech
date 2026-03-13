
export default function Footer() {
  return (
    <footer className="bg-[#297194] text-white py-6 px-4 text-sm">
      <div className="max-w-6xl mx-auto text-center space-y-2">
        
        {/* Wellness Quote */}
        <p className="italic">"Take care of your mind."</p>

        {/* Contact Info */}
        <p>
          © {new Date().getFullYear()} MindfulSpace. All rights reserved.  📧 support@mindfulspace.com | 📞 +91 8149240833
        </p>

      </div>
    </footer>
  );
}