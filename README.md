# Convenciones de Codificacion
1. Estándares Generales de Java
Clases: nombradas en PascalCase
Métodos: nombrados en camelCase
'''
public class InactivarOfertaService {
    private final OfertaRepository ofertaRepository;

    public InactivarOfertaService(OfertaRepository ofertaRepository) {
        this.ofertaRepository = ofertaRepository;
    }
...
'''
Variables: en camelCase con nombres descriptivos (ofertaRepository, createdAt, empresaTipoId).
Encapsulamiento: uso adecuado de private para atributos y public para métodos públicos.
JavaBeans: uso de get, set, e is para acceso a atributos.

# Estilos de programacion

1. Trinity: Estilo de capas usadas.
    Entrada (API), Procesamiento (Servicios), Datos (Repositorio).

2. RESTful: en esta aplicación web usamos recursos, verbos HTTP, rutas limpias
    @GetMapping, @PostMapping, @PutMapping, etc.
    Rutas limpias

