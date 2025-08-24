// Filtering functionality for portfolio
document.addEventListener('DOMContentLoaded', function() {
    // Portfolio filtering
    const categoryButtons = document.querySelectorAll('.category-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    if (categoryButtons.length > 0) {
        categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                button.classList.add('active');
                
                const category = button.getAttribute('data-category');
                
                // Filter portfolio items
                portfolioItems.forEach(item => {
                    if (category === 'all' || item.getAttribute('data-category') === category) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
    
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
    
    // Form submission
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('ขอบคุณสำหรับข้อความ! เราจะติดต่อกลับไปหาคุณเร็วๆ นี้');
            this.reset();
        });
    }
    
    // Adjust navigation for mobile on resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navLinks.style.display = 'flex';
        } else {
            navLinks.style.display = 'none';
            navLinks.classList.remove('active');
        }
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (navLinks.classList.contains('active') && 
            !e.target.closest('.nav-links') && 
            !e.target.closest('.hamburger')) {
            navLinks.classList.remove('active');
        }
    });
});

// Portfolio Modal functionality
document.addEventListener('DOMContentLoaded', function() {
    // Portfolio data
    const portfolioItems = {
        1: {
            title: "แอปพลิเคชั่นร้านค้าพันธุ์ปลาสวยงาม",
            description: "ออกแบบ UI ร้านขายพันธุ์ปลาสวยงาม มีรพบบหมวดหมู่ รถเข็นและการชำระเงิน",
            image: "../image/figma/uxui-1.png",
            tags: ["Figma", "UI Design", "E-commerce" ],
            link: "https://www.figma.com/proto/wRVsgAjaDFHpnLhSbGwDhz/6807005?node-id=55-65&starting-point-node-id=58%3A2042"
        },
        2: {
            title: "เว็บไซต์ภูมิปัญญาพื้นบ้าน",
            description: "ออกแบบขนาดเว็บไซต์, มือถือ, แท็บเล็ต เกี่ยวกับภูมิปัญญาพื้นบ้าน มีเมนูต่างๆ สามารถเลื่อนภาพได้",
            image: "./image/figma/uxui-2.png",
            tags: ["Figma", "UI Design"],
            link: "https://www.figma.com/proto/DQl3AnZEevXZZyn9aBH8aa/6602306%E0%B8%8A%E0%B8%99%E0%B8%B0%E0%B8%8A%E0%B8%B1%E0%B8%A2_-final?node-id=1-79&t=2G8fL1T4oJbkT4yk-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A79"
        },
        3: {
            title: "เว็บไซต์บริษัทท่องเที่ยว",
            description: "ออกแบบ UI ทั้ง 3 ขนาด มีหลากหลายเมนู สามารถกดใช้งานได้จริง",
            image: "./image/figma/uxui-3.png",
            tags: ["Figma", "UI Design", "Corporate"],
            link: "https://www.figma.com/proto/H9LiuZs7QO2pptGA1wlecT/6606082-GranMonte?node-id=1-2&t=mA6IN4a2BpnowKNn-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2&show-proto-sidebar=1"
        },
        4: {
            title: "แอปพลิเคชั่นเกมตารางธาตุ",
            description: "ออกแบบ UI แบบไม่ติดลิขสิทธิ์ เกี่ยวกับเกมให้ความรู้ตารางธาตุ",
            image: "./image/figma/uxui-4-1.png",
            tags: ["Figma", "UI Design"],
            link: "https://www.figma.com/proto/Mo9SFJkrTEWs8nEyzHnExx/%E0%B8%95%E0%B8%B2%E0%B8%A3%E0%B8%B2%E0%B8%87%E0%B8%98%E0%B8%B2%E0%B8%95%E0%B8%B8-Perio?node-id=424-50&p=f&t=LPsa4hbGM6pUgU4A-0&scaling=scale-down&content-scaling=fixed&page-id=424%3A50&starting-point-node-id=424%3A70"
        },
        5: {
            title: "แอปพลิเคชั่นเกมสุ่มกาชา",
            description: "ออกแบบ UI แอปพลิเคชั่น เกมสุ่มกาชา มีระบบล็อกอินและตรวจสอบ, หน้าเมนูหลักต่างๆ",
            image: "./image/figma/uxui-5-1.png",
            tags: ["Figma", "UI Design"],
            link: "https://www.figma.com/proto/81PyAfbvPnBY7CGAtCntPJ/GACHA-POP?node-id=188-141&t=SjlejmjAHwwcATZ2-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=188%3A141"
        },
        6: {
            title: "แอปพลิเคชั่นเกม Cyber",
            description: "ออกแบบ UI แอปพลิเคชั่นเกม Cyber Safe",
            image: "./image/figma/uxui-6-1.png",
            tags: ["Figma", "UI Design"],
            link: "https://www.figma.com/proto/tgNz3RLYOC17xuLDi7YOAq/Synergy-save?node-id=86-68&t=VeubWTNsFb6lv8gz-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1"
        },
        7: {
            title: "Landing Page ร้านอาหาร",
            description: "ออกแบบและพัฒนา Landing Page สำหรับร้านอาหาร",
            image: "https://placehold.co/800x600/4527A0/FFFFFF?text=Landing+Page",
            tags: ["Website", "HTML/CSS", "Responsive"],
            link: "https://example.com/project7"
        },
        8: {
            title: "เว็บขายของออนไลน์",
            description: "ออกแบบและพัฒนาเว็บขายของออนไลน์ด้วย React",
            image: "https://placehold.co/800x600/283593/FFFFFF?text=E-commerce+Site",
            tags: ["Website", "React", "E-commerce"],
            link: "https://example.com/project8"
        },
        9: {
            title: "เว็บขายของออนไลน์",
            description: "ออกแบบและพัฒนาเว็บขายของออนไลน์ด้วย React",
            image: "https://placehold.co/800x600/283593/FFFFFF?text=E-commerce+Site",
            tags: ["Website", "React", "E-commerce"],
            link: "https://example.com/project8"
        }
    };

    // Modal elements
    const modal = document.getElementById('portfolio-modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalTags = document.getElementById('modal-tags');
    const modalLink = document.getElementById('modal-link');
    const closeModal = document.querySelector('.close-modal');

    // View buttons
    const viewButtons = document.querySelectorAll('.view-btn');
    
    viewButtons.forEach(button => {
        button.addEventListener('click', function() {
            const projectId = this.getAttribute('data-id');
            const project = portfolioItems[projectId];
            
            if (project) {
                modalImage.src = project.image;
                modalImage.alt = project.title;
                modalTitle.textContent = project.title;
                modalDescription.textContent = project.description;
                modalLink.href = project.link;
                
                // Clear existing tags
                modalTags.innerHTML = '';
                
                // Add new tags
                project.tags.forEach(tag => {
                    const tagElement = document.createElement('span');
                    tagElement.className = 'tag';
                    tagElement.textContent = tag;
                    modalTags.appendChild(tagElement);
                });
                
                // Show modal
                modal.classList.add('show');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            }
        });
    });

    // Close modal
    closeModal.addEventListener('click', function() {
        modal.classList.remove('show');
        document.body.style.overflow = ''; // Enable scrolling
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.classList.remove('show');
            document.body.style.overflow = ''; // Enable scrolling
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.classList.contains('show')) {
            modal.classList.remove('show');
            document.body.style.overflow = ''; // Enable scrolling
        }
    });
    
    // ... existing code for filtering and mobile menu ...
});

// Form validation and submission
document.addEventListener('DOMContentLoaded', function() {
    // Form validation
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Basic validation
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const serviceSelect = document.getElementById('service');
            const messageTextarea = document.getElementById('message');
            
            let isValid = true;
            
            // Reset previous error states
            document.querySelectorAll('.error-message').forEach(el => el.remove());
            document.querySelectorAll('.form-group').forEach(el => el.classList.remove('error'));
            
            // Validate name
            if (!nameInput.value.trim()) {
                showError(nameInput, 'กรุณากรอกชื่อ');
                isValid = false;
            }
            
            // Validate email
            if (!emailInput.value.trim()) {
                showError(emailInput, 'กรุณากรอกอีเมล');
                isValid = false;
            } else if (!isValidEmail(emailInput.value)) {
                showError(emailInput, 'กรุณากรอกอีเมลให้ถูกต้อง');
                isValid = false;
            }
            
            // Validate service
            if (!serviceSelect.value) {
                showError(serviceSelect, 'กรุณาเลือกบริการที่ต้องการ');
                isValid = false;
            }
            
            // Validate message
            if (!messageTextarea.value.trim()) {
                showError(messageTextarea, 'กรุณากรอกรายละเอียดงาน');
                isValid = false;
            }
            
            if (!isValid) {
                e.preventDefault();
            }
        });
    }
    
    // Helper function to show error message
    function showError(input, message) {
        const formGroup = input.closest('.form-group');
        formGroup.classList.add('error');
        
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.style.color = 'var(--accent)';
        errorElement.style.fontSize = '14px';
        errorElement.style.marginTop = '5px';
        errorElement.textContent = message;
        
        formGroup.appendChild(errorElement);
    }
    
    // Helper function to validate email format
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // ... existing code for portfolio modal and filtering ...
});