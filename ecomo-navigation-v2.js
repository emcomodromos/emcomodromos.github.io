document.addEventListener('DOMContentLoaded', function() {
  const nav = document.getElementById('nav-main');
  if (!nav) return;
  const oldMenu = nav.querySelector('ul');
  if (!oldMenu) return;
  const newMenu = document.createElement('ul');
  newMenu.className = 'ecomo-modern-menu';
  newMenu.innerHTML = '<li><a href="index.html">Home</a></li><li><a href="#">Μαθήματα</a><ul><li><a href="2a.htm">Θεμελιώσεις - Αντιστηρίξεις</a></li><li><a href="2b.htm">Υπολογιστική Γεωτεχνική Μηχανική</a></li><li><a href="2c.htm">Σήραγγες</a></li><li><a href="2d.htm">Αλληλεπίδραση Εδάφους - Κατασκευών</a></li><li><a href="2e.htm">Διατριβές</a></li></ul></li><li><a href="#">Γεωτεχνικά</a><ul><li><a href="#">Φέρουσα Ικανότητα</a><ul><li><a href="3c_1.htm">Επιφανειακές</a></li><li><a href="3c_2.htm">Βαθειές Θεμελιώσεις</a></li></ul></li><li><a href="3d_d.htm">Καθιζήσεις</a></li><li><a href="3e_e.htm">Βελτιώσεις Εδαφών</a></li><li><a href="3ff.htm">Αναλύσεις Ευστάθειας</a></li><li><a href="3g_g.htm">Οπλισμένα Επιχώματα</a></li><li><a href="3h.htm">Φράγματα</a></li></ul></li><li><a href="#">Θεμελιώσεις</a><ul><li><a href="#">Πάσσαλοι</a><ul><li><a href="4c_1.htm">Μεμονωμένοι Πάσσαλοι</a></li><li><a href="4c_2.htm">Ομάδες Πασσάλων</a></li><li><a href="4c_3.htm">Δοκιμαστικές Φορτίσεις</a></li><li><a href="4c_4.htm">Αρνητικές Τριβές</a></li></ul></li><li><a href="4a.htm">Επιφανειακές</a></li><li><a href="4bb.htm">Συνδυασμένες</a></li><li><a href="4e.htm">Φρέατα</a></li></ul></li><li><a href="#">Σήραγγες</a><ul><li><a href="5a_a.htm">Τυπική Διατομή</a></li><li><a href="5b_b.htm">Δυσμενείς Συνθήκες</a></li><li><a href="5b_c.htm">TBM 3-D Ανάλυση</a></li><li><a href="5c_c.htm">Εκσκαφή-Επανεπίχωση</a></li><li><a href="5d_d.htm">Στόμια</a></li><li><a href="5ff.htm">Φρέατα Εξαερισμού</a></li></ul></li><li><a href="#">Αντιστηρίξεις</a><ul><li><a href="6aa.htm">Διαφραγματικοί Τοίχοι</a></li><li><a href="6ab.htm">3-D Διαφραγματικοί Τοίχοι</a></li><li><a href="6b.htm">Αλληλοτεμνόμενοι Πάσσαλοι</a></li><li><a href="6c.htm">Τοίχοι Berlinoise</a></li><li><a href="6d.htm">Πασσαλοσανίδες</a></li><li><a href="6ee.htm">Τοίχοι Οπλισμένου Σκυροδέματος</a></li></ul></li><li><a href="#">Γέφυρες</a><ul><li><a href="7a.htm">Πλευρική Οψη</a></li><li><a href="7b.htm">Προεντεταμένο Σκυρόδεμα</a></li><li><a href="7c.htm">Θεμελίωση</a></li><li><a href="7d.htm">Βάθρα</a></li></ul></li><li><a href="#">Συνδέσεις</a><ul><li><a href="#">Γενικού Ενδιαφέροντος</a><ul><li><a href="http://www.nationalgeographic.com/siteindex/index.html">National Geographic</a></li><li><a href="http://www.jsbach.org/completecategory.html">Bach</a></li><li><a href="http://www.ancientgreece.com">Αρχαία Ελλάδα</a></li><li><a href="http://www.onlineconversion.com/">Convert</a></li></ul></li><li><a href="#">Περιοδικά</a><ul><li><a href="https://www.lib.uth.gr/LWS/el/el_hp.asp">Βιβλ. Παν. Θεσσαλίας</a></li><li><a href="https://www.editorialmanager.com/jrngteng">ASCE</a></li><li><a href="http://www.thomastelford.com/journals/JournalContents.asp?JournalTitle=Gιotechnique&amp;JournalID=7&amp;JournalMenu=true&amp;OriginalTitle=Gιotechnique">Geotechnique</a></li><li><a href="http://www3.interscience.wiley.com/journal/3312/home">IJNAMG</a></li><li><a href="http://www.sciencedirect.com/science/journal/0266352X">Computers &amp; Geotechnics</a></li><li><a href="http://www.jiban.or.jp/">Soils &amp; Foundations</a></li><li><a href="http://www.sciencedirect.com/science?_ob=JournalListURL&amp;_type=all&amp;_auth=y&amp;_btn=Y&amp;_acct=C000054409&amp;_version=1&amp;_urlVersion=0&amp;_userid=1749147&amp;md5=eaadbc5637301d82d871b456dcbd877b">Science Direct</a></li></ul></li><li><a href="">Βιβλιοθήκες-Στοιχεία</a><ul><li><a href="http://portal.tee.gr/portal/page/portal/TEE_HOME">TEE</a></li><li><a href="http://www.geocities.com/geotechlinks/fe.htm">GeotechLinks</a></li><li><a href="http://www.fhwa.dot.gov/engineering/geotech/library_listing.cfm">FHWA</a></li><li><a href="http://www.igt.ethz.ch/Main.htm?/www/Home.php">I.G.T. at\xa0 E.T.H</a></li><li><a href="http://users.civil.ntua.gr/kavvadas/Books/books.htm">Site Μ. Καββαδά</a></li><li><a href="http://www.itascacg.com/">ITASCA</a></li></ul></li></ul></li>';
  oldMenu.replaceWith(newMenu);
  // Enable touch and keyboard activation on parent categories.
  for (const item of newMenu.querySelectorAll('li')) {
    const submenu = item.querySelector(':scope > ul');
    if (!submenu) continue;
    const anchor = item.querySelector(':scope > a');
    if (!anchor) continue;
    anchor.setAttribute('aria-haspopup','true');
    anchor.setAttribute('aria-expanded','false');
    anchor.addEventListener('click', function(e) {
      if (anchor.getAttribute('href') === '#') {
        e.preventDefault();
        const open = item.classList.toggle('ecomo-open');
        anchor.setAttribute('aria-expanded',String(open));
      }
    });
    item.addEventListener('mouseleave',()=>{ item.classList.remove('ecomo-open'); anchor.setAttribute('aria-expanded','false'); });
  }
});
