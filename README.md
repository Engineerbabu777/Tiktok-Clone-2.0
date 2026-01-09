# TikTok Clone - React Native App

A comprehensive TikTok clone built with React Native, Expo, and Supabase. This app allows users to create, share, and discover short video content with a modern social media experience.

## 📱 Features

### Core Features
- **Video Feed**: Infinite scrolling video feed with autoplay
- **User Authentication**: Secure login and registration system
- **Video Creation**: Record and upload short videos
- **Social Interactions**: Like, comment, and share videos
- **User Profiles**: Personal profiles with video collections

### Technical Features
- **Real-time Database**: Supabase integration for backend services
- **State Management**: Zustand for efficient state management
- **Navigation**: React Navigation with tab-based interface
- **Video Processing**: Expo Video for seamless video playback
- **Responsive Design**: Adaptive UI for all device sizes

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or later recommended)
- npm or yarn
- Expo CLI
- Android Studio / Xcode (for emulator testing)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/tiktok-clone.git
   cd tiktok-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add your Supabase credentials:
   ```env
   EXPO_PUBLIC_SUPABASE_URL=your-supabase-url
   EXPO_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

4. **Start the development server**
   ```bash
   npx expo start
   ```

5. **Run the app**
   - Press `a` to run on Android emulator
   - Press `i` to run on iOS simulator
   - Scan the QR code with Expo Go app for physical device testing

## 📂 Project Structure

```
tiktok-clone/
├── app/                  # Main application screens and routing
│   ├── (auth)/           # Authentication screens
│   ├── (protected)/      # Protected routes (requires auth)
│   │   ├── (tabs)/       # Tab navigation screens
│   │   └── postComments/ # Comment screens
│   └── _layout.tsx       # Root layout configuration
│
├── assets/               # Static assets (images, icons)
│
├── components/           # Reusable UI components
│   ├── GenericComponents/ # Generic reusable components
│   └── PostListItem.tsx   # Video post component
│
├── lib/                  # Library and utility functions
│   └── supabase.ts        # Supabase client configuration
│
├── services/             # API services
│   ├── comments.ts       # Comment-related services
│   └── posts.ts          # Post-related services
│
├── stores/               # State management
│   └── useAuthStore.ts    # Authentication state store
│
├── types/                # TypeScript type definitions
│   └── types.ts          # Application types
│
├── app.json              # Expo configuration
├── package.json          # Project dependencies
└── README.md             # Project documentation
```

## 🔧 Technologies Used

### Core Technologies
- **React Native**: Cross-platform mobile framework
- **Expo**: Development platform and toolchain
- **TypeScript**: Type-safe JavaScript
- **Supabase**: Open-source Firebase alternative for backend

### Key Libraries
- **Navigation**: `@react-navigation/native`, `@react-navigation/bottom-tabs`
- **State Management**: `zustand`
- **Data Fetching**: `@tanstack/react-query`
- **Video Processing**: `expo-video`, `expo-camera`
- **UI Components**: `expo-router`, `react-native-gesture-handler`
- **Storage**: `@react-native-async-storage/async-storage`
- **Icons**: `@expo/vector-icons`

### Development Tools
- **Linting**: ESLint with Expo configuration
- **Type Checking**: TypeScript
- **Build Tools**: Expo CLI

## 🎨 App Screens

### Authentication
- **Login Screen**: User authentication
- **Register Screen**: New user registration

### Main App (Protected Routes)
- **Home Feed**: Main video feed with infinite scrolling
- **Friends**: Social connections and following
- **New Post**: Video creation and upload
- **Inbox**: Messages and notifications
- **Profile**: User profile and settings
- **Post Comments**: Video comment section

## 📱 App Navigation

The app uses a tab-based navigation system with the following structure:

- **Home Tab**: Main video feed
- **Friends Tab**: Social connections
- **New Post Tab**: Video creation
- **Inbox Tab**: Messages and notifications
- **Profile Tab**: User profile

## 🔄 State Management

The app uses **Zustand** for state management with the following stores:

- **Auth Store**: Manages user authentication state and session
- **React Query**: Handles data fetching and caching for posts and comments

## 📦 API Services

### Supabase Integration
The app uses Supabase for:
- User authentication
- Video storage
- Database operations
- Real-time updates

### Service Files
- `services/posts.ts`: Handles video post operations
- `services/comments.ts`: Manages comment functionality

## 🛠 Development Workflow

### Running the App
```bash
# Start development server
npx expo start

# Run on Android
npx expo run:android

# Run on iOS
npx expo run:ios

# Run on web
npx expo start --web
```

### Building for Production
```bash
# Build Android APK
npx expo build:android

# Build iOS IPA
npx expo build:ios
```

### Code Quality
```bash
# Run linting
npm run lint

# Type checking
npx tsc --noEmit
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature/your-feature`)
6. Open a Pull Request

### Code Style Guidelines
- Follow TypeScript best practices
- Use functional components with hooks
- Keep components small and focused
- Write clear, descriptive commit messages
- Add comments for complex logic

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📬 Contact

For questions or support, please contact:
- Email: support@tiktokclone.com
- GitHub Issues: [https://github.com/yourusername/tiktok-clone/issues](https://github.com/yourusername/tiktok-clone/issues)

## 🎯 Future Enhancements

- **Video Effects**: Add filters and effects to videos
- **Search Functionality**: Discover content and users
- **Notifications**: Real-time notification system
- **Analytics**: User engagement metrics
- **Monetization**: In-app purchases and ads

## 📚 Resources

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [Supabase Documentation](https://supabase.com/docs)
- [Zustand Documentation](https://github.com/pmndrs/zustand)
- [React Query Documentation](https://tanstack.com/query/latest)

---

Made with ❤️ using React Native and Expo
