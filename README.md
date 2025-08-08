# Great 8 Lacrosse - Premier Event Website

A modern, sleek black-themed website for Great 8 lacrosse events, featuring elite competition and unmatched exposure to college coaches.

## 🎯 Overview

Great 8 is a premier lacrosse event company that hosts elite showcases, tournaments, and combines. This website provides a comprehensive platform for players, coaches, and administrators to connect and manage lacrosse events.

## ✨ Features

### 🏠 Landing Page
- Full-screen autoplay video background with dark overlay
- Prominent display of tagline: "Premier Venue. Hyper Elite Competition. Unmatched Exposure to College Coaches."
- Smooth scroll navigation with anchor links
- Cinematic, bold, professional design

### 📅 Events Section
- Upcoming events carousel/grid on homepage
- Dedicated events page with detailed information
- Event registration and management
- Photo and video highlights integration

### 🎬 Game Film
- Professional game film ordering system
- Multiple package options (Individual Highlights, Full Game Film, Event Package)
- Typeform integration for orders
- HD quality footage with multiple camera angles

### 🏆 Player Rankings
- Sortable player rankings table
- 7-category skill evaluation (Speed, Agility, Stick, Defense, Strength, IQ, Communication)
- Overall score calculation (0-100 scale)
- Top 100 players subsection
- Individual player profile pages
- Admin CSV upload functionality

### 🏨 Hotels
- Recommended accommodations for each event
- Group booking codes and special rates
- Hotel amenities and contact information
- Distance from venue information

### 👨‍💼 College Coaches
- Registered college coaches directory
- Division and conference filtering
- Private login area for coaches
- Direct contact information
- Event attendance tracking

### ⚙️ Admin Dashboard
- Protected admin login system
- CSV upload and parsing for player data
- Player information management
- Event updates and management
- Game film content management
- YouTube/video link integration

## 🎨 Design Theme

- **Color Scheme**: Black with crimson accents and silver highlights
- **Typography**: Modern, high-contrast fonts (Inter, Poppins)
- **Style**: Cinematic, bold, professional, performance-oriented
- **Responsive**: Mobile-first design with smooth animations

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Authentication**: NextAuth.js
- **Forms**: React Hook Form
- **Notifications**: React Hot Toast
- **Video**: React Player

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd great-8-lacrosse
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXTAUTH_SECRET=your-secret-key
   NEXTAUTH_URL=http://localhost:3000
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
great-8-lacrosse/
├── app/                    # Next.js App Router
│   ├── admin/             # Admin dashboard
│   ├── coaches/           # College coaches page
│   ├── game-film/         # Game film ordering
│   ├── hotels/            # Hotel recommendations
│   ├── rankings/          # Player rankings
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Landing page
├── components/            # Reusable components
│   ├── Navbar.tsx         # Navigation component
│   ├── HeroSection.tsx    # Landing page hero
│   ├── EventsSection.tsx  # Events showcase
│   ├── StatsSection.tsx   # Statistics display
│   └── Footer.tsx         # Footer component
├── public/                # Static assets
├── tailwind.config.js     # Tailwind configuration
├── next.config.js         # Next.js configuration
└── package.json           # Dependencies
```

## 🎯 Key Features Implementation

### Player Rankings System
- CSV upload with automatic parsing
- 7-category skill evaluation (0-5.0 scale)
- Overall score calculation: `(average_score / 5) * 100`
- Sortable table with search and filtering
- Admin interface for data management

### Admin Dashboard
- Protected routes with authentication
- CSV upload and validation
- Player data management
- Event content management
- Game film upload and organization

### Responsive Design
- Mobile-first approach
- Smooth animations and transitions
- Optimized for all device sizes
- Touch-friendly interactions

## 🔧 Configuration

### Tailwind CSS
The project uses a custom Tailwind configuration with:
- Custom color palette (elite black theme)
- Custom animations and keyframes
- Responsive breakpoints
- Custom component classes

### Fonts
- **Inter**: Primary font for body text
- **Poppins**: Display font for headings and branding

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support or questions, please contact:
- Email: info@great8lacrosse.com
- Phone: (555) 123-4567

## 🎯 Future Enhancements

- [ ] Real-time chat system for coaches and players
- [ ] Advanced analytics and reporting
- [ ] Mobile app development
- [ ] Integration with college recruitment platforms
- [ ] Live streaming capabilities
- [ ] Advanced video editing tools
- [ ] Payment processing integration
- [ ] Email marketing automation

---

**Great 8 Lacrosse** - Premier Venue. Hyper Elite Competition. Unmatched Exposure to College Coaches. 