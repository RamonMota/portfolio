import React, { useEffect, useRef } from 'react'

export const HorizontalScrollContainer = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Função para rolar até um item com um determinado ID
  const scrollToItem = (itemId: any) => {
    const container = containerRef.current;
    const item = document.getElementById(itemId);

    if (item && container) {
      // Calcula a posição central do contêiner
      const containerCenter = container.offsetWidth / 2;

      // Calcula a posição central do item em relação ao início do contêiner
      const itemCenter = item.offsetLeft - container.offsetLeft + item.offsetWidth / 2;

      // Move o scroll horizontal até a posição que coloca o item no centro do contêiner
      container.scrollLeft = itemCenter - containerCenter;
    }
  };

  // Exemplo: Rolar até o item com ID 'item2' após a montagem do componente
  useEffect(() => {
    scrollToItem('item5');
  }, []);

  return (
    <div ref={containerRef} style={{ width: '300px', whiteSpace: 'nowrap', overflow: 'auto', border: '1px solid #ccc' }}>
      <div id="item1" style={{ display: 'inline-block', width: '100px', height: '100px', backgroundColor: 'gray', marginRight: '10px' }}></div>
      <div id="item2" style={{ display: 'inline-block', width: '100px', height: '100px', backgroundColor: 'pink', marginRight: '10px' }}></div>
      <div id="item3" style={{ display: 'inline-block', width: '100px', height: '100px', backgroundColor: 'yellow', marginRight: '10px' }}></div>
      <div id="item4" style={{ display: 'inline-block', width: '100px', height: '100px', backgroundColor: 'purple', marginRight: '10px' }}></div>
      <div id="item5" style={{ display: 'inline-block', width: '200px', height: '100px', backgroundColor: 'red', marginRight: '10px' }}></div>
      <div id="item6" style={{ display: 'inline-block', width: '100px', height: '100px', backgroundColor: 'black', marginRight: '10px' }}></div>
      <div style={{ display: 'inline-block', width: '400px' }}></div>
    </div>
  );
};