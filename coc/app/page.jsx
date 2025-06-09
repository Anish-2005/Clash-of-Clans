"use client";

import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import Image from "next/image";

const ClashToolsLanding = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [stats, setStats] = useState({
    gold: 1000000,
    elixir: 1923847,
    darkElixir: 48291,
    gems: 1247,
    trophies: 3892,
    clanLevel: 18,
    warWins: 247
  });

  const heroRef = useRef();
  const sceneRef = useRef();
  const rendererRef = useRef();
  const cameraRef = useRef();
  const meshesRef = useRef([]);
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Enhanced features with more detail
  const features = [
    {
      title: "Advanced Base Designer",
      description: "Create impenetrable fortress layouts with our intelligent building placement system...",
      longDescription: "Our state-of-the-art base designer uses AI to analyze your building placement...",
      iconImg: "https://play-lh.googleusercontent.com/UJZEBlfXPxDlPDrj2NiVA7DBsELmNv1Tld-3M32tSlC5TZ8VfecEtTXw2OLnHFVB8CVh",
      color: "#FFD700",
      path: "/builder",
      badge: "TH17 Ready",
      stats: "50M+ Bases Created"
    },
    {
      title: "AI War Strategist",
      description: "Get personalized 3-star attack strategies powered by machine learning...",
      longDescription: "Our AI analyzes millions of successful attacks to provide you with the highest probability strategies...",
      iconImg: "https://pixelcrux.com/Clash_of_Clans/Images/Icons/War_Leagues.png",
      color: "#FF6B6B",
      path: "/ai-planner",
      badge: "99.2% Win Rate",
      stats: "2M+ Strategies Generated"
    },
    {
      title: "Realistic Battle Simulator",
      description: "Practice attacks in our physics-accurate 3D simulator...",
      longDescription: "Experience battles exactly as they happen in-game...",
      iconImg: "https://img.tapimg.net/market/images/a6446faec16e449b0aad65e069ba9dec.png",
      color: "#FF8C42",
      path: "/simulator",
      badge: "Physics Engine",
      stats: "10M+ Simulations Run"
    },
    {
      title: "Clan Management Suite",
      description: "Comprehensive clan analytics, member performance tracking...",
      longDescription: "Manage your clan like a pro with detailed statistics...",
      iconImg: "https://api-assets.clashofclans.com/badges/512/j3K7StftbOe1Ejb8gvGoJ6n2pyM9rRaGvUnNneFYg4s.png",
      color: "#4ECDC4",
      path: "/analytics",
      badge: "Pro Analytics",
      stats: "100K+ Clans Managed"
    },
    {
      title: "Trophy Pushing Assistant",
      description: "Optimize your trophy climbing with base recommendations...",
      longDescription: "Reach Legend League faster with our trophy optimization tools...",
      iconImg: "https://cloud.frankeapps.com/resize/3/legendary.288x288q50.png.webp",
      color: "#9B59B6",
      path: "/trophy-push",
      badge: "Legend Tier",
      stats: "500K+ Legends Reached"
    },
    {
      title: "Upgrade Optimizer",
      description: "Plan your upgrades efficiently with resource calculators...",
      longDescription: "Never waste resources again. Our optimizer calculates the most efficient upgrade paths...",
      iconImg: "https://www.clasher.us/images/coc/units/Hammer_of_Building.png",
      color: "#E67E22",
      path: "/optimizer",
      badge: "Max Efficiency",
      stats: "1B+ Resources Saved"
    }
  ];

 const testimonials = [
    {
      name: "Lightning McQueen",
      clan: "Speed Demons",
      quote: "ClashTools helped me reach Legend League for the first time! The AI strategist is incredible.",
      rating: 5,
      achievement: "Legend League"
    },
    {
      name: "Queen Archer",
      clan: "Royal Guard",
      quote: "Our clan's war win rate improved from 60% to 95% using the battle simulator. Game changer!",
      rating: 5,
      achievement: "War Champion"
    },
    {
      name: "Dragon Master",
      clan: "Fire Lords",
      quote: "The base designer helped me create an unbeatable TH17 layout. Haven't been 3-starred in weeks!",
      rating: 5,
      achievement: "Undefeated"
    }
  ];
  // Three.js setup with enhanced visuals
 useEffect(() => {
  if (!heroRef.current || !isClient) return;

  const heroElement = heroRef.current; // Cache ref for cleanup

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0);
  heroElement.appendChild(renderer.domElement);

  sceneRef.current = scene;
  rendererRef.current = renderer;
  cameraRef.current = camera;

  const createClashObject = (type) => {
    let geometry, material;

    switch (type) {
      case 'gold':
        geometry = new THREE.SphereGeometry(0.4);
        material = new THREE.MeshPhongMaterial({
          color: 0xFFD700,
          emissive: 0xFFA500,
          emissiveIntensity: 0.4,
          shininess: 100,
        });
        break;
      case 'elixir':
        geometry = new THREE.SphereGeometry(0.4);
        material = new THREE.MeshPhongMaterial({
          color: 0xFF69B4,
          emissive: 0xFF1493,
          emissiveIntensity: 0.4,
          shininess: 100,
        });
        break;
      case 'dark':
        geometry = new THREE.SphereGeometry(0.3);
        material = new THREE.MeshPhongMaterial({
          color: 0x8B008B,
          emissive: 0x4B0082,
          emissiveIntensity: 0.3,
          shininess: 100,
        });
        break;
      default: // gems
        geometry = new THREE.OctahedronGeometry(0.3);
        material = new THREE.MeshPhongMaterial({
          color: 0x00FFFF,
          emissive: 0x008B8B,
          emissiveIntensity: 0.3,
          shininess: 200,
        });
        break;
    }

    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 15,
      (Math.random() - 0.5) * 15
    );

    mesh.userData = {
      type,
      initialY: mesh.position.y,
      rotationSpeed: Math.random() * 0.02 + 0.005,
    };

    return mesh;
  };

  const meshes = [];
  const types = ['gold', 'elixir', 'dark', 'gems'];

  for (let i = 0; i < 12; i++) {
    const mesh = createClashObject(types[i % types.length]);
    scene.add(mesh);
    meshes.push(mesh);
  }

  meshesRef.current = meshes;

  // Lighting
  const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
  directionalLight.position.set(1, 1, 1);
  scene.add(directionalLight);

  const pointLight = new THREE.PointLight(0xffd700, 0.5, 50);
  pointLight.position.set(0, 10, 10);
  scene.add(pointLight);

  camera.position.z = 25;

  // Animation loop
  const animate = () => {
    requestAnimationFrame(animate);

    const time = Date.now() * 0.001;

    meshes.forEach((mesh, index) => {
      mesh.rotation.x += mesh.userData.rotationSpeed;
      mesh.rotation.y += mesh.userData.rotationSpeed * 0.7;
      mesh.rotation.z += mesh.userData.rotationSpeed * 0.3;

      mesh.position.y = mesh.userData.initialY + Math.sin(time + index) * 1.5;
      mesh.position.x += Math.sin(time * 0.5 + index) * 0.01;
    });

    renderer.render(scene, camera);
  };

  animate();
  setIsLoaded(true);

  return () => {
    // Proper cleanup
    if (heroElement && renderer.domElement) {
      heroElement.removeChild(renderer.domElement);
    }

    meshes.forEach(mesh => {
      scene.remove(mesh);
      mesh.geometry.dispose();
      mesh.material.dispose();
    });

    scene.clear();
    renderer.dispose();
  };
}, [isClient]);


  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (cameraRef.current && rendererRef.current) {
        cameraRef.current.aspect = window.innerWidth / window.innerHeight;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(window.innerWidth, window.innerHeight);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-rotate features and testimonials
  useEffect(() => {
    const featureInterval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 6000);

    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => {
      clearInterval(featureInterval);
      clearInterval(testimonialInterval);
    };
 }, [features.length, testimonials.length]);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animate stats
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        gold: prev.gold + Math.floor(Math.random() * 2000 + 500),
        elixir: prev.elixir + Math.floor(Math.random() * 1500 + 300),
        darkElixir: prev.darkElixir + Math.floor(Math.random() * 100 + 10),
        gems: prev.gems + (Math.random() > 0.90 ? Math.floor(Math.random() * 3 + 1) : 0),
        trophies: prev.trophies + (Math.random() > 0.5 ? Math.floor(Math.random() * 5 + 1) : -Math.floor(Math.random() * 3 + 1)),
        clanLevel: prev.clanLevel,
        warWins: prev.warWins + (Math.random() > 0.95 ? 1 : 0)
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

const ResourceDisplay = ({ type, value, emoji, color }) => (
  <div
    className={`flex items-center space-x-2 bg-gray-800/90 rounded-full px-4 py-2 border-2 border-${color}-400/50 shadow-lg backdrop-blur-sm`}
  >
    <span className="text-xl filter drop-shadow-lg">{emoji}</span>
    <span className={`font-bold text-${color}-400 text-sm tracking-wide`}>
      {value.toLocaleString("en-US")} {/* or "en-IN" */}
    </span>
  </div>
);


  const ClashButton = ({ children, onClick, variant = "primary", className = "", size = "md" }) => {
    const baseClasses = "relative font-bold rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg";
    const sizeClasses = size === "lg" ? "px-8 py-4 text-lg" : size === "sm" ? "px-4 py-2 text-sm" : "px-6 py-3";
    const primaryClasses = "bg-gradient-to-br from-yellow-400 to-yellow-600 text-gray-900 hover:from-yellow-300 hover:to-yellow-500 border-2 border-yellow-300 shadow-yellow-500/25";
    const secondaryClasses = "bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-yellow-500 text-yellow-400 hover:bg-gradient-to-br hover:from-gray-700 hover:to-gray-800 shadow-yellow-500/25";

    return (
      <button
        onClick={onClick}
        className={`${baseClasses} ${sizeClasses} ${variant === "primary" ? primaryClasses : secondaryClasses} ${className}`}
      >
        {children}
      </button>
    );
  };

  const FeatureCard = ({ feature, index, isActive, setActiveFeature }) => {
    return (
      <div
        className={`relative transition-all duration-700 cursor-pointer ${isActive ? "scale-105 z-10" : "opacity-90 hover:opacity-100 hover:scale-102"
          }`}
        onClick={() => setActiveFeature(index)}
      >
        <div
          className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-2xl p-8 shadow-2xl backdrop-blur-sm transition-all duration-500"
          style={{
            border: `2px solid ${feature.color}`,
            boxShadow: isActive ? `0 0 20px ${feature.color}40` : undefined,
          }}
        >
          {isActive && (
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent rounded-2xl pointer-events-none"></div>
          )}

          <div className="flex justify-between items-start mb-6">
            <div className="w-20 h-20 flex items-center justify-center bg-gray-800/50 rounded-xl border border-gray-700">
              <img
                src={feature.iconImg}
                alt={`${feature.title} icon`}
                className="w-12 h-12 object-contain drop-shadow-md"
              />
            </div>
            {feature.badge && (
              <span className="text-xs px-3 py-1 bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 rounded-full font-bold shadow-lg">
                {feature.badge}
              </span>
            )}
          </div>

          <h3 className="text-2xl font-bold text-yellow-400 mb-4 leading-tight">
            {feature.title}
          </h3>

          <p className="text-gray-300 text-sm leading-relaxed mb-4 min-h-[4rem]">
            {feature.description}
          </p>

          <div className="mb-4">
            <span className="text-xs text-gray-500 font-semibold">{feature.stats}</span>
          </div>

          <div className="flex items-center text-yellow-400 font-semibold text-sm group">
            Launch Tool
            <svg
              className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  };

const menuItems = ['Features', 'Tools', 'Simulator', 'Analytics', 'Community'];
  const TestimonialCard = ({ testimonial, isActive }) => (
    <div className={`transition-all duration-500 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95 absolute'}`}>
      <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl p-6 border border-yellow-500/30 backdrop-blur-sm">
        <div className="flex items-center mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <span key={i} className="text-yellow-400 text-lg">⭐</span>
          ))}
        </div>
        <p className="text-gray-300 mb-4 italic">&quot;{testimonial.quote}&quot;</p>

        <div className="flex justify-between items-center">
          <div>
            <p className="text-yellow-400 font-bold">{testimonial.name}</p>
            <p className="text-gray-500 text-sm">{testimonial.clan}</p>
          </div>
          <span className="text-xs bg-yellow-500 text-gray-900 px-2 py-1 rounded-full font-bold">
            {testimonial.achievement}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Enhanced Navigation */}
        <nav className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${isScrolled ? 'bg-gray-900/95 backdrop-blur-md py-3 shadow-2xl border-b border-yellow-500/30' : 'bg-transparent py-4'}
      `}>
        <div className="container mx-auto px-6 flex justify-between items-center">

          {/* Logo */}
          <div className="flex items-center cursor-pointer group">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center mr-3 shadow-lg">
             <Image src="/icons/castle.png" alt="Castle" width={40} height={40} className="w-10 h-10" />

            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Clash of Clans
            </span>
          </div>

          {/* Resource Stats (Desktop Only) */}
          <div className="hidden lg:flex items-center space-x-3">
            <ResourceDisplay type="gold" value={stats.gold} emoji={<Image src="/icons/gold.webp" alt="Gold" width={20} height={20} className="w-5 h-5" />} color="yellow" />
            <ResourceDisplay type="elixir" value={stats.elixir} emoji={<Image src="/icons/elixir" alt="Elixir" width={20} height={20} className="w-5 h-5" />} color="pink" />
            <ResourceDisplay type="dark" value={stats.darkElixir} emoji={<Image src="/icons/dark.webp" alt="Dark Elixir" width={20} height={20} className="w-5 h-5" />} color="purple" />
            <ResourceDisplay type="gems" value={stats.gems} emoji={<Image src="/icons/gem" alt="Gems" width={20} height={20} className="w-5 h-5" />} color="cyan" />
          </div>

          {/* Desktop Menu (hidden on mobile) */}
          <div className="hidden md:flex items-center space-x-8 ml-6">
            {menuItems.map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-yellow-400 font-medium transition-all duration-300 hover:scale-105"
              >
                {item}
              </a>
            ))}

            <ClashButton onClick={() => {}} size="sm">
              <Image src="/icons/start.gif.png" alt="Get Started" width={20} height={20} className="w-6 h-6 inline mr-1" />
              Get Started
            </ClashButton>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            className="md:hidden text-2xl text-yellow-400 hover:scale-110 transition-transform z-50"
            onClick={() => setIsMenuOpen(true)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Sidebar Backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Sidebar Menu */}
      <div className={`
        fixed top-0 right-0 z-50 h-full w-72 bg-gray-900/95 shadow-2xl transition-transform duration-500 ease-in-out
        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="flex justify-between items-center px-6 py-5 border-b border-yellow-500/20">
          <h2 className="text-yellow-400 text-xl font-bold">Menu</h2>
          <button onClick={() => setIsMenuOpen(false)} className="text-yellow-400 text-2xl">✕</button>
        </div>

        <nav className="flex flex-col px-6 py-6 space-y-4">
          {menuItems.map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-yellow-400 text-lg font-medium transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}

          <ClashButton onClick={() => setIsMenuOpen(false)} size="sm">
            <Image src="/icons/start.gif.png" alt="Start" width={20} height={20} className="w-5 h-5 inline mr-2" />
            Get Started
          </ClashButton>
        </nav>
  </div>
      {/* Enhanced Hero Section */}
      {/* Enhanced Hero Section */}
      <section className="mt-32 pt-16 relative min-h-screen flex items-center justify-center overflow-hidden">
        <div ref={heroRef} className="absolute inset-0 z-0 opacity-40" />

        {/* Floating Stats */}
        <div className="absolute top-24 right-6 z-20 space-y-3">
          <ResourceDisplay
            type="trophies"
            value={stats.trophies}
            emoji={<Image src="/icons/trophy.png" alt="Trophies" width={20} height={20} className="w-8 h-8 inline" />}
            color="yellow"
          />
          <ResourceDisplay
            type="clan"
            value={stats.clanLevel}
            emoji={<Image src="/icons/level.png" alt="Clan Level"  width={20} height={20} className="w-8 h-8 inline" />}
            color="blue"
          />
        </div>

        <div className={`
    relative z-10 container mx-auto px-6 text-center transition-all duration-1000
    ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
  `}>
          {/* Town Hall 17 Showcase */}
          <div className="mb-8 relative">
            <div className="w-32 h-32 mx-auto mb-6 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-red-500/20 rounded-full animate-pulse"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-yellow-500 to-red-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-yellow-400">
                <Image src="/icons/th17" alt="Town Hall" width={20} height={20} className="w-20 h-20" />
              </div>
              <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-bounce">
                TH17
              </div>
            </div>
            <p className="text-sm text-yellow-400 font-semibold mb-2">NEW: TOWN HALL 17 SUPPORT</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Master</span>{' '}
              <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Every</span>{' '}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Battle</span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            The most advanced toolkit for Clash of Clans. Design perfect bases, master attack strategies,
            and dominate every war with AI-powered tools trusted by millions of players worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <ClashButton onClick={() => { }} variant="primary" size="lg">
              <Image src="/icons/castle.png" alt="Start Building" width={20} height={20} className="w-8 h-8 inline mr-2" />
              Start Building Now
            </ClashButton>
            <ClashButton onClick={() => { }} variant="secondary" size="lg">
              <Image src="/icons/sword" alt="Battle Tools" width={20} height={20}className="w-8 h-8 inline mr-2" />
              View Battle Tools
            </ClashButton>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-16">
            <div className="bg-gray-800/50 rounded-lg p-4 border border-yellow-500/30">
              <div className="text-2xl font-bold text-yellow-400">50M+</div>
              <div className="text-sm text-gray-300">Bases Created</div>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4 border border-red-500/30">
              <div className="text-2xl font-bold text-red-400">99.2%</div>
              <div className="text-sm text-gray-300">Win Rate</div>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4 border border-blue-500/30">
              <div className="text-2xl font-bold text-blue-400">2M+</div>
              <div className="text-sm text-gray-300">Active Users</div>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4 border border-green-500/30">
              <div className="text-2xl font-bold text-green-400">100K+</div>
              <div className="text-sm text-gray-300">Clans</div>
            </div>
          </div>

          <div className="mt-16 flex justify-center">
            <div className="animate-bounce text-yellow-400">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>


      {/* Enhanced Features Section */}
      <section id="features" className="py-24 relative bg-gradient-to-br from-gray-900/70 to-gray-800/70">
        <div className="container mx-auto px-6">

          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-xl">
              <Image src="/icons/start.gif.png" alt="Clash Icon" width={20} height={20} className="w-12 h-12" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Ultimate Clash Arsenal
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Everything you need to become a Clash of Clans legend. From base design to war strategy,
              our tools give you the competitive edge.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                feature={feature}
                index={index}
                isActive={activeFeature === index}
                setActiveFeature={setActiveFeature} // <-- make sure this is passed
              />
            ))}

          </div>

          {/* Featured Tool Spotlight */}
          <div className="max-w-6xl mx-auto bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-3xl p-8 border-2 border-yellow-500/30 backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-yellow-400 mb-4">
                  {features[activeFeature].title}
                </h3>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {features[activeFeature].longDescription}
                </p>
                <ClashButton onClick={() => { }} variant="primary">
                  Try {features[activeFeature].title}
                </ClashButton>
              </div>
              <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-700">
                <div className="text-center">
                  <img
                    src={features[activeFeature].iconImg}
                    alt={`${features[activeFeature].title} Icon`}
                    className="w-20 h-20 mb-4 mx-auto"
                  />
                  <div className="text-2xl font-bold text-yellow-400 mb-2">
                    {features[activeFeature].stats}
                  </div>
                  <div className="text-gray-400">
                    Trusted by millions
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* Base Builder Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuoWZ3_vkQe_St8BeBcBMX7ihfCOP7DsxeoQ&s" alt="Hammer" width={20} height={20} className="w-30 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-400">
              Base Builder
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Design the perfect base with our intuitive builder tool
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-gray-900/80 rounded-xl p-6 border border-yellow-500/30">
            <div className="grid grid-cols-8 gap-1 mb-8">
              {Array(64).fill(0).map((_, i) => (
                <div key={i} className="aspect-square bg-gray-800 rounded-sm border border-gray-700"></div>
              ))}
            </div>

            <div className="flex justify-center space-x-4">
              <ClashButton onClick={() => { }} variant="primary">
                Design Base
              </ClashButton>
              <ClashButton onClick={() => { }} variant="secondary">
                Copy Layout
              </ClashButton>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative bg-gray-900/70">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <Image src="/icons/king.png" alt="Barbarian King" width={40} height={40} className="w-40 mx-auto mb-8" />
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-yellow-400">
              Ready for War?
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Join thousands of players who dominate the battlefield with ClashTools
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <ClashButton onClick={() => { }} variant="primary">
                🚀 Get Started
              </ClashButton>
              <ClashButton onClick={() => { }} variant="secondary">
                ⚔️ Learn More
              </ClashButton>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-yellow-500/20">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Image src="/icons/castle.png" alt="ClashTools"width={8} height={8}className="h-8 mr-2" />
                <span className="text-xl font-bold text-yellow-400">
                  Clash of Clans
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                The ultimate toolkit for Clash of Clans players.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-yellow-400 mb-4">Tools</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-yellow-400 text-sm">Base Builder</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-400 text-sm">War Planner</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-400 text-sm">Battle Sim</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-yellow-400 mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-yellow-400 text-sm">Guides</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-400 text-sm">Tutorials</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-400 text-sm">Community</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-yellow-400 mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-yellow-400 text-sm">Privacy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-400 text-sm">Terms</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-400 text-sm">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © 2025 COC. Not affiliated with Supercell.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ClashToolsLanding;