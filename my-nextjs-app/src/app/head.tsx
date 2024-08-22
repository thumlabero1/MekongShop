// components/MyComponent.tsx
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const MyComponent: React.FC = () => {
    return (
        
            <Helmet>
                <link rel="dns-prefetch" href="//ninico.botble.com" />
                <link rel="dns-prefetch" href="//schema.org" />
                <link rel="dns-prefetch" href="//www.w3.org" />
                <link rel="dns-prefetch" href="//www.facebook.com" />
                <link rel="dns-prefetch" href="//twitter.com" />
                <link rel="dns-prefetch" href="//www.behance.net" />
                <link rel="dns-prefetch" href="//www.youtube.com" />
                <link rel="dns-prefetch" href="//www.linkedin.com" />
                <link rel="dns-prefetch" href="//www.googletagmanager.com" />
                
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5, user-scalable=1" name="viewport" />
                <meta name="csrf-token" content="wTS76UlGKNDta3ac8Soj7BvpKZq5jIMQdLmqWJG3" />
                
                <link media="all" type="text/css" rel="stylesheet" href="path/to/fonts.css"></link>
                <link media="all" type="text/css" rel="stylesheet" href="path/to/theme.css"></link>
                <link media="all" type="text/css" rel="stylesheet" href="path/to/page-speed.css"></link>
                
                <title>Ninico - Minimal eCommerce</title>
                <meta name="description" content="Ninico is a modern and flexible Minimal eCommerce Laravel script. This script is suited for electronic, organic and grocery store, furniture store, clothing store, hitech store and accessories store..." />
                <link rel="canonical" href="https://ninico.botble.com" />
                <meta name="robots" content="index, follow" />
                <meta property="og:site_name" content="Ninico - Minimal eCommerce" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Ninico - Minimal eCommerce" />
                <meta property="og:description" content="Ninico is a modern and flexible Minimal eCommerce Laravel script. This script is suited for electronic, organic and grocery store, furniture store, clothing store, hitech store and accessories store..." />
                <meta property="og:url" content="https://ninico.botble.com" />
                <meta name="twitter:title" content="Ninico - Minimal eCommerce" />
                <meta name="twitter:description" content="Ninico is a modern and flexible Minimal eCommerce Laravel script. This script is suited for electronic, organic and grocery store, furniture store, clothing store, hitech store and accessories store..." />
                <link rel="shortcut icon" type="image/x-icon" href="https://ninico.botble.com/storage/general/favicon.png" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "name": "Ninico - Minimal eCommerce",
                        "url": "https://ninico.botble.com"
                    })}
                </script>
                <link media="all" type="text/css" rel="stylesheet" href="https://ninico.botble.com/vendor/core/plugins/language/css/language-public.css?v=2.2.0" />
                {/* Add more stylesheets and scripts as needed */}
                <script>
                    {`
                        window.siteUrl = "https://ninico.botble.com";
                    `}
                </script>
            </Helmet>
            
        
    );
};

export default MyComponent;
