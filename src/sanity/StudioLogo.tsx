import React from 'react'

export const StudioLogo = (props: any) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '1.5rem' }}>☕</span>
            <span style={{ fontWeight: 800, letterSpacing: '-0.025em', fontFamily: 'sans-serif' }}>
                Lili <span style={{ color: '#D4AF37' }}>Breakfast Cafe</span>
            </span>
        </div>
    )
}
